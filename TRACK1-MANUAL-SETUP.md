# Track 1: Manual Platform Setup — Human Checklist

> **For:** Cord Rehn
> **Time required:** ~75 minutes total
> **Prerequisites:** Access to Namecheap account, access to staplesandstatementss@gmail.com (Danielle's Gmail)
> **Do these IN ORDER — each step depends on the one before it.**

---

## Step 1: Namecheap Email Redirects (staplesandstatements.com)
**Time:** ~10 min | **Platform:** Namecheap (your account)

### What you're doing
Setting up 3 email aliases that forward mail to Danielle's Gmail.

### Steps
1. Log in to Namecheap
2. Domain List → click **staplesandstatements.com** → Manage
3. Click the **"Redirect Email"** tab
4. Add these 3 redirects one at a time:

| Alias | Forward To |
|---|---|
| `danielle.marie` | `staplesandstatementss@gmail.com` |
| `hello` | `staplesandstatementss@gmail.com` |
| `support` | `staplesandstatementss@gmail.com` |

5. Verify all 3 appear in the redirect list

### How to verify it worked
Send a test email from jordansg57@gmail.com to hello@staplesandstatements.com. It should arrive in staplesandstatementss@gmail.com within a few minutes. (DNS propagation may take up to 30 min on first setup.)

> **WARNING:** The Gmail is `staplesandstatementss` with TWO s's at the end. Triple-check this every time you type it.

---

## Step 2: Namecheap Email Redirect (clevercloset.app)
**Time:** ~5 min | **Platform:** Namecheap (your account)

### What you're doing
Setting up 1 email alias for the Clever Closet domain.

### Steps
1. Still in Namecheap → Domain List → click **clevercloset.app** → Manage
2. Click the **"Redirect Email"** tab
3. Add this redirect:

| Alias | Forward To |
|---|---|
| `hello` | `staplesandstatementss@gmail.com` |

4. Verify it appears in the redirect list

### How to verify it worked
Send a test email from jordansg57@gmail.com to hello@clevercloset.app. It should arrive in staplesandstatementss@gmail.com.

---

## Step 3: Create Brevo Account for Staples & Statements
**Time:** ~15 min | **Platform:** brevo.com

### What you're doing
Creating a NEW Brevo account (separate from your SG57 one) for Danielle's brand. This enables Gmail send-as with her professional email.

> **CRITICAL: Do NOT use your existing SG57 Brevo account (jordansg57@gmail.com). Create a BRAND NEW account.**

### Steps
1. **Log out** of Brevo if you're logged into your SG57 account
2. Open an **incognito/private browser window** (safest way to avoid account confusion)
3. Go to https://www.brevo.com → **Sign Up**
4. Register with:
   - **Email:** `staplesandstatementss@gmail.com` (TWO s's)
   - **Password:** (choose a strong one, save it)
   - **Company name:** `Staples & Statements`
5. Complete the onboarding wizard (industry: Fashion/Beauty, company size: 1-10)
6. Go to **Senders & IPs** → **Senders** → **Add a Sender**
   - From Name: `Danielle Marie`
   - From Email: `danielle.marie@staplesandstatements.com`
   - Click **Save**
   - Brevo sends a verification email → it goes to staplesandstatementss@gmail.com (via the Namecheap redirect you just set up in Step 1)
   - Find that email → click the **verification link**
7. Go to **SMTP & API** → click **SMTP** tab
8. You should see:
   - **SMTP Server:** `smtp-relay.brevo.com`
   - **Port:** `587`
   - **Login:** `staplesandstatementss@gmail.com`
9. Click **Generate a new SMTP key**
10. **COPY THIS KEY AND SAVE IT SOMEWHERE SAFE.** You need it for Step 4. It looks like `xkeysib-xxxxxxxxxxxx...`





### How to verify it worked
The sender verification email arrived and you clicked it. The SMTP key is saved.

---

## Step 4: Gmail Send-As Configuration
**Time:** ~15 min | **Platform:** Gmail

### What you're doing
Configuring Danielle's Gmail so she can SEND emails that show "From: danielle.marie@staplesandstatements.com" instead of her personal Gmail.

> **CRITICAL: You must be logged into Gmail as `staplesandstatementss@gmail.com` (Danielle's account), NOT jordansg57@gmail.com (yours).**

### Steps
1. Log in to Gmail as **staplesandstatementss@gmail.com**
   - Use incognito window if you're logged into your own Gmail
2. Click the **gear icon** (top right) → **See all settings**
3. Go to the **"Accounts and Import"** tab
4. Find the section **"Send mail as:"**
5. Click **"Add another email address"**
6. A popup window opens. Enter:
   - **Name:** `Danielle Marie`
   - **Email address:** `danielle.marie@staplesandstatements.com`
   - **Check** "Treat as an alias"
   - Click **Next Step**
7. Enter SMTP details:
   - **SMTP Server:** `smtp-relay.brevo.com`
   - **Port:** `587`
   - **Username:** `staplesandstatementss@gmail.com`
   - **Password:** the **SMTP Key from Step 3** (the `xkeysib-xxxx...` key, NOT the Brevo account password)
   - **Select:** "Secured connection using TLS"
   - Click **Add Account**
8. Gmail sends a verification email to danielle.marie@staplesandstatements.com
   - It forwards to this same inbox (staplesandstatementss@gmail.com)
   - Find that email → click the **confirmation link** OR copy the code and paste it
9. Back in Settings → Accounts and Import → Send mail as:
   - You should now see `danielle.marie@staplesandstatements.com` listed
   - Click **"make default"** next to it (so all outgoing mail uses the professional address)

### How to verify it worked
1. Click **Compose** in Gmail
2. Click the **"From"** dropdown — you should see both:
   - staplesandstatementss@gmail.com
   - danielle.marie@staplesandstatements.com (this should be default)
3. Send a test email to jordansg57@gmail.com from the professional address
4. Check your inbox — it should show "From: Danielle Marie <danielle.marie@staplesandstatements.com>"

---

## Step 5: Gmail Filters & Labels
**Time:** ~10 min | **Platform:** Gmail (still logged in as staplesandstatementss@gmail.com)

### What you're doing
Organizing incoming emails with labels so S&S mail doesn't mix with personal mail.

### Steps
1. In Gmail → click the **gear icon** → **See all settings** → **Labels** tab
2. Scroll down → **Create new label** for each:
   - `S&S / General`
   - `S&S / Personal`
   - `S&S / Support`
   - `Clever Closet`
3. Go to the **Filters and Blocked Addresses** tab
4. Click **Create a new filter** for each:

**Filter 1:**
- To: `hello@staplesandstatements.com`
- Click "Create filter"
- Apply the label: `S&S / General`
- Click "Create filter"

**Filter 2:**
- To: `danielle.marie@staplesandstatements.com`
- Click "Create filter"
- Apply the label: `S&S / Personal`
- Click "Create filter"

**Filter 3:**
- To: `support@staplesandstatements.com`
- Click "Create filter"
- Apply the label: `S&S / Support`
- Click "Create filter"

**Filter 4:**
- To: `hello@clevercloset.app`
- Click "Create filter"
- Apply the label: `Clever Closet`
- Click "Create filter"

### How to verify it worked
Send test emails to each address from jordansg57@gmail.com. Each should arrive with the correct label applied.

---

## Step 6: Calendly Account & Event Setup
**Time:** ~15 min | **Platform:** calendly.com

### What you're doing
Creating Danielle's booking system. Clients will self-schedule consultations from the website.

> **Register with `staplesandstatementss@gmail.com`, NOT your personal Gmail.**

### Steps
1. Go to https://calendly.com → **Sign Up**
2. Register with: **staplesandstatementss@gmail.com**
3. Name: **Danielle Marie Holman**
4. When prompted, **connect Google Calendar** (the Google account for staplesandstatementss@gmail.com)
   - This lets Calendly read her calendar for availability and create events on it
5. Create a new **Event Type:**
   - **Event name:** `Staples & Statements — Consultation with Danielle Marie`
   - **Duration:** 20 minutes
   - **Location:** Zoom (or add both Zoom + "Phone Call" and let invitee choose)
   - **Description:** `A free 20-minute consultation to discuss your style goals and discover which services are the best fit for you.`
6. **Availability:**
   - Set available hours (ask Danielle, but a good default: Mon-Fri 10am-6pm PT, Sat 10am-2pm PT)
   - Minimum scheduling notice: **24 hours**
   - Buffer time: **15 minutes** after each event
7. **Invitee Questions** → Add a custom question:
   - Question: `How did you hear about Staples & Statements?`
   - Type: **Dropdown**
   - Options: `Instagram`, `TikTok`, `Friend / Referral`, `Google Search`, `Other`
   - Required: No
8. Go to **Share** → copy the **scheduling link** (something like `https://calendly.com/staplesandstatementss/consultation`)
9. **SAVE THIS URL** — the code build needs it for the embed on the contact page

### How to verify it worked
Open the scheduling link in an incognito window. You should see available time slots. Book a test appointment. It should appear on the Google Calendar for staplesandstatementss@gmail.com.

> **IMPORTANT:** After Danielle gets her flight schedule each month (~10th), she needs to block those days on Google Calendar. Calendly will automatically hide those blocked times from clients.

---

## Step 7: Formspree Account & Form
**Time:** ~5 min | **Platform:** formspree.io

### What you're doing
Creating a contact form backend. Form submissions from the website will be emailed to hello@staplesandstatements.com.

> **Register with `staplesandstatementss@gmail.com`, NOT your personal Gmail.**

### Steps
1. Go to https://formspree.io → **Sign Up**
2. Register with: **staplesandstatementss@gmail.com**
3. Click **New Form**
4. Form name: `Staples & Statements Contact Form`
5. Send notifications to: `hello@staplesandstatements.com`
6. Copy the **form endpoint** (something like `https://formspree.io/f/xAbCdEfG`)
7. **SAVE THIS ENDPOINT URL** — the code build needs it for the contact page



https://formspree.io/f/xwvrvgky




### How to verify it worked
Formspree gives you a test page for the form. Submit a test message. It should arrive at hello@staplesandstatements.com (which forwards to staplesandstatementss@gmail.com with the `S&S / General` label).

---

## Step 8: Google Analytics 4 Setup
**Time:** ~10 min | **Platform:** analytics.google.com

### What you're doing
Creating a GA4 property so you can track website traffic. This goes under Danielle's account — you get added as an editor.

> **Log in as `staplesandstatementss@gmail.com` first, then add jordansg57@gmail.com as editor.**

### Steps
1. Go to https://analytics.google.com
2. Log in as **staplesandstatementss@gmail.com**
3. Click **Admin** (gear icon, bottom left)
4. Click **Create** → **Account**
   - Account name: `Staples & Statements`
   - Accept defaults → Next
5. **Create Property:**
   - Property name: `staplesandstatements.com`
   - Reporting time zone: **(GMT-08:00) Pacific Time**
   - Currency: **US Dollar (USD)**
   - Click Next
6. Business details:
   - Industry: **Beauty & Fitness** (or Other if not available)
   - Size: **Small**
   - Click Next → Create
7. **Set up a data stream:**
   - Choose **Web**
   - Website URL: `https://staplesandstatements.com`
   - Stream name: `Main Website`
   - Click **Create stream**
8. You'll see the **Measurement ID** (starts with `G-`)
9. **COPY AND SAVE THIS ID** — the code build needs it

### Add Cord as Editor
10. Go to **Admin** → **Account Access Management**
11. Click the **+** button → **Add users**
12. Email: `jordansg57@gmail.com`
13. Role: **Editor**
14. Click **Add**

### How to verify it worked
Log out. Log in as jordansg57@gmail.com. Go to analytics.google.com. You should see the "Staples & Statements" account and the property.

---

## After All Steps Are Done

You should have these 3 values saved:

| Value | From Step | Example |
|---|---|---|
| **Formspree Endpoint** | Step 7 | `https://formspree.io/f/xAbCdEfG` |
| **GA4 Measurement ID** | Step 8 | `G-ABC1234567` |
| **Calendly Scheduling URL** | Step 6 | `https://calendly.com/staplesandstatementss/consultation` |

