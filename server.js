const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_KEY = process.env.ADMIN_KEY || "change-me";
const FILE = path.join(__dirname, "data", "messages.json");

app.use(express.json({ limit: "10kb" }));
app.use(express.static(path.join(__dirname, "public")));

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

app.post("/api/contact", (req, res) => {
  if (limited(req.ip)) return res.status(429).json({ error: "Too many messages. Try again later." });
  const { name, email, message } = req.body || {};
  const ok = (s, max) => typeof s === "string" && s.trim().length > 0 && s.length <= max;
  if (!ok(name, 80) || !ok(email, 120) || !ok(message, 2000)) return res.status(400).json({ error: "Invalid input." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: "Invalid email address." });
  const all = read();
  all.push({ id: Date.now(), name: name.trim(), email: email.trim(), message: message.trim(), at: new Date().toISOString() });
  write(all);
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
