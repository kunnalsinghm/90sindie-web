# Putting the portfolio online

Your visitor counter, contact form and admin page need the Node server, so use a host that runs Node (not GitHub Pages).

## 1. Prepare
1. `npm install` (installs nodemailer for email notifications).
2. Copy `.env.example` to `.env` and set `ADMIN_KEY` to a long random secret. Optionally fill in the SMTP lines to get an email for every message.
3. Your resume is at `public/resume.pdf` (replace the file to update it).
4. Your links are in `public/showcase.js` (`LINKS`) and `public/data.js` (`SOCIAL`).
5. Optional: set your booking link (`BOOK_URL`) at the top of `public/more.js`. Films and posts live in `public/data.js`.

## 2. Deploy on Render (or Railway)
1. Push the folder to a GitHub repository (`.env` is already ignored).
2. Render: New > Web Service > pick the repo. Build command `npm install`, start command `npm start`.
3. Add the environment variables from your `.env` in the host's dashboard (ADMIN_KEY, SMTP_*, NOTIFY_TO).
4. Messages and the visitor count are saved in the `data/` folder. Free hosts wipe that folder on every redeploy, so either attach a persistent disk/volume mounted at the `data` folder, or rely on the email notifications.

## 3. Custom domain
Add your domain in the host's dashboard, then create the DNS record it shows (CNAME for www, or the A/ALIAS record for the root domain).

## 4. Link previews (LinkedIn, WhatsApp)
In `public/index.html`, change `og:image` to a full URL, e.g. `https://yourdomain.com/bliss.jpg`, and add an `og:url` line with your domain. Previews need absolute URLs.

## 5. Admin page
Open `https://yourdomain.com/admin.html` and enter your ADMIN_KEY to read messages, the visitor count and which windows people open most.

## 6. Email for every message
Every message from the Contact form and the Outlook Express window is saved in `data/messages.json` and, once this is set up, emailed to singhkunal7934@gmail.com:
1. Turn on 2-Step Verification for the Google account, then create an App Password at https://myaccount.google.com/apppasswords.
2. Copy `.env.example` to `.env` and paste the 16 characters as `SMTP_PASS` (no spaces).
3. Run `npm install` once, restart the server, and look for "Email notifications are on" in the terminal.
Never share the app password or commit `.env`.
