const express = require("express");
const fs = require("fs");
const path = require("path");
try { process.loadEnvFile(); } catch { console.log("No .env file found: using defaults. Copy .env.example to .env to turn on email."); }

const app = express();
app.set("trust proxy", 1); // correct visitor IPs behind Render/Railway
const PORT = process.env.PORT || 3000;
const ADMIN_KEY = process.env.ADMIN_KEY || "change-me";
const FILE = path.join(__dirname, "data", "messages.json");

app.use(express.json({ limit: "10kb" }));
app.use(express.static(path.join(__dirname, "public")));

// ---- Email notifications (optional): set SMTP_HOST, SMTP_USER, SMTP_PASS in .env ----
let mailer = null;
try {
  const nm = require("nodemailer");
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const port = Number(process.env.SMTP_PORT || 465);
    mailer = nm.createTransport({ host: process.env.SMTP_HOST, port, secure: port === 465, auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS.replace(/\s+/g, "") } });
    console.log("Email notifications are on. Messages go to " + (process.env.NOTIFY_TO || "singhkunal7934@gmail.com") + ".");
    mailer.verify().then(() => console.log("SMTP login OK: Gmail accepted the app password.")).catch((e) => console.log("SMTP login FAILED:", e.message));
  } else {
    console.log("Email notifications are OFF: add SMTP_HOST, SMTP_USER and SMTP_PASS to .env (see .env.example).");
  }
} catch { /* nodemailer not installed: run npm install */ }
function notify(m) {
  if (!mailer) return;
  mailer.sendMail({
    from: `Portfolio <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_TO || "singhkunal7934@gmail.com",
    replyTo: m.email,
    subject: `Portfolio message from ${m.name}`,
    text: `${m.message}\n\n- ${m.name} <${m.email}>`,
  }).then(() => console.log("Email sent for a message from " + m.name + ".")).catch((e) => console.log("Email FAILED:", e.message));
}
if (ADMIN_KEY === "change-me") console.log("WARNING: set a real ADMIN_KEY (see .env.example) before putting this online.");

const read = () => { try { return JSON.parse(fs.readFileSync(FILE, "utf8")); } catch { return []; } };
const write = (d) => fs.writeFileSync(FILE, JSON.stringify(d, null, 2));

// tiny in-memory rate limit: 5 messages / 10 min / IP
const hits = new Map();
function limited(ip) {
  const now = Date.now(), win = 10 * 60 * 1000;
  const list = (hits.get(ip) || []).filter((t) => now - t < win);
  list.push(now); hits.set(ip, list);
  return list.length > 5;
}

app.get("/api/health", (_req, res) => res.json({ ok: true }));

// ---- Extras: visitor counter ----
const jf = (n) => path.join(__dirname, "data", n);
const rj = (n, d) => { try { return JSON.parse(fs.readFileSync(jf(n), "utf8")); } catch { return d; } };
const wj = (n, v) => fs.writeFileSync(jf(n), JSON.stringify(v, null, 2));
app.get("/api/visit", (_req, res) => res.json({ visits: rj("stats.json", { visits: 0 }).visits }));
app.post("/api/visit", (_req, res) => { const s = rj("stats.json", { visits: 0 }); s.visits++; wj("stats.json", s); res.json(s); });
// ---- Per-window view counts + admin stats ----
app.post("/api/view", (req, res) => {
  const w = req.body && req.body.w;
  if (typeof w !== "string" || !/^[a-z][\w-]{0,29}$/i.test(w)) return res.status(400).json({ error: "bad id" });
  const s = rj("stats.json", { visits: 0 });
  s.views = s.views || {};
  s.views[w] = (s.views[w] || 0) + 1;
  wj("stats.json", s);
  res.json({ ok: true });
});
app.get("/api/admin/stats", (req, res) => {
  if (req.query.key !== ADMIN_KEY) return res.status(401).json({ error: "Unauthorized" });
  res.json(rj("stats.json", { visits: 0 }));
});

app.post("/api/contact", (req, res) => {
  if (limited(req.ip)) return res.status(429).json({ error: "Too many messages. Try again later." });
  const { name, email, message } = req.body || {};
  const ok = (s, max) => typeof s === "string" && s.trim().length > 0 && s.length <= max;
  if (!ok(name, 80) || !ok(email, 120) || !ok(message, 2000)) return res.status(400).json({ error: "Invalid input." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: "Invalid email address." });
  const all = read();
  all.push({ id: Date.now(), name: name.trim(), email: email.trim(), message: message.trim(), at: new Date().toISOString() });
  write(all);
  notify({ name: name.trim(), email: email.trim(), message: message.trim() });
  console.log(`New message from ${name} <${email}>`);
  res.json({ ok: true });
});

// View messages: http://localhost:3000/api/messages?key=YOUR_ADMIN_KEY
app.get("/api/messages", (req, res) => {
  if (req.query.key !== ADMIN_KEY) return res.status(401).json({ error: "Unauthorized" });
  res.json(read());
});

// If the port is busy, automatically try the next one (3000 -> 3001 -> ...)
function start(port, tries = 0) {
  const server = app.listen(port, () => console.log(`Portfolio running at http://localhost:${port}`));
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE" && tries < 10) {
      console.log(`Port ${port} is busy, trying ${port + 1}...`);
      start(port + 1, tries + 1);
    } else {
      throw err;
    }
  });
}
start(Number(PORT));
