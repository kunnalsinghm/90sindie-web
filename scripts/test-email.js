// Usage: npm run test-email
// Sends one test email using the settings in .env and prints exactly what went wrong, if anything.
try { process.loadEnvFile(); } catch { console.log("No .env file found in this folder. Copy .env.example to .env first."); process.exit(1); }
const missing = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"].filter((k) => !process.env[k] || /your-16|app-password/i.test(process.env[k]));
if (missing.length) { console.log("Fill these in .env first:", missing.join(", ")); process.exit(1); }
let nm;
try { nm = require("nodemailer"); } catch { console.log("nodemailer is not installed. Run: npm install"); process.exit(1); }
const port = Number(process.env.SMTP_PORT || 465);
const t = nm.createTransport({ host: process.env.SMTP_HOST, port, secure: port === 465, auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS.replace(/\s+/g, "") } });
const to = process.env.NOTIFY_TO || "singhkunal7934@gmail.com";
(async () => {
  try {
    await t.verify();
    console.log("1/2 Login OK (Gmail accepted the app password).");
    const r = await t.sendMail({ from: `Portfolio <${process.env.SMTP_USER}>`, to, subject: "Portfolio test email", text: "If you can read this, email notifications work." });
    console.log("2/2 Sent to " + to + ". Server reply:", r.response);
    console.log("Check Inbox, Spam and the Sent folder.");
  } catch (e) {
    console.log("FAILED:", e.message);
    if (/535|Invalid login|Username and Password/i.test(e.message)) console.log("-> Wrong app password, or 2-Step Verification is off. Create a new app password and paste it as SMTP_PASS.");
    if (/ENOTFOUND|ECONNREFUSED|ETIMEDOUT|ESOCKET/i.test(e.message)) console.log("-> Network problem: check your internet, VPN or firewall (port 465).");
  }
})();
