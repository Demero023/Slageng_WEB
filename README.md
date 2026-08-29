# Slageng — Premium Nightclub & Grill Website

**Live URL:** [https://slageng.co.za](https://slageng.co.za)

---

## About the Website

This is the official website for **Slageng**, a premium nightclub and grill located in Seshego Zone 1, Polokwane. The site is designed to showcase the club's vibe, events, and atmosphere, allow customers to book VIP tables online, provide information about the menu, operating hours, and location, display upcoming and past events, and give staff access to a booking dashboard.

---

## Features

- **Home Page** — Hero section, welcome message, live music gallery.
- **About Page** — History, mission, vision, and club experience.
- **Events Page** — Upcoming and past events with artist images.
- **Community Page** — Community events like Women's Day celebrations.
- **Contact Page** — Booking form, location, and contact information.
- **Booking** — Table booking with Google Sheets backend.
- **Worker Dashboard** — View bookings with password protection.
- **Social Media** — Instagram, Facebook, WhatsApp integration.
- **Google Maps** — Embedded location map.
- **PostImages Hosting** — All images hosted on PostImages for fast loading.
- **Embedded Media** — YouTube and Facebook videos embedded using iframe codes.

---

## How to Update the Website

### Updating Events, Photos, or Content

1. Edit the relevant HTML file (e.g., `events.html`) in VS Code.
2. Save your changes.
3. Push to GitHub using the commands below.
4. Netlify auto-deploys within 1–2 minutes.

### Adding New Photos

1. Upload the image to PostImages or your preferred hosting service.
2. Copy the direct image link.
3. Add the image to the HTML file using an `<img>` tag with the link.
4. Push to GitHub — Netlify deploys automatically.

### Adding Embedded Videos

1. Get the embed code from YouTube or Facebook.
2. Paste the iframe code into the relevant HTML file.
3. Push to GitHub.

### Updating Booking Dashboard

1. Open `dashboard.html`.
2. Update the `webAppUrl` if the Google Apps Script URL changes.
3. Push to GitHub.

---

## Technology Stack

- **HTML** — Structure and content.
- **CSS** — Styling and responsive design.
- **JavaScript** — Interactivity and form submissions.
- **Google Apps Script** — Backend for bookings.
- **Google Sheets** — Data storage for bookings.
- **Netlify** — Hosting and deployment.
- **GitHub** — Version control.
- **PostImages** — Image hosting.
- **Facebook** — Embedded video content.

---

## How to Book a Table

1. Visit the Contact page.
2. Click "Book Now".
3. Fill in the form (Name, Phone, Date, Guests, Message).
4. Submit — the booking is saved to Google Sheets.
5. Staff can view bookings on the dashboard.

---

## Maintenance Schedule

- **Update events** — Weekly.
- **Add photos** — As needed.
- **Check bookings** — Daily.
- **Update menu / specials** — Monthly mostly.
- **Security updates** — As needed.

---

## Git Commands for Updates

```bash
# Add all changes
git add .

# Commit with a message
git commit -m "Describe your changes here"

# Push to GitHub
git push origin main
```
