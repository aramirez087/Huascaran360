# 📧 Manual Invoice Sending Guide

## Why Manual Sending is Needed

Your PayPal account has a **restriction preventing invoice sending** - both via API and manually from the dashboard. This is a PayPal account-level limitation.

**Current Status:**
- ✅ Invoices CREATE successfully (visible in PayPal dashboard as Draft)
- ❌ Invoices CANNOT be sent (API returns REQUEST_REJECTED)
- ❌ Manual sending from dashboard also fails with generic error

**Root Cause:** PayPal account restriction. Requires contacting PayPal support to resolve.

---

## 🔄 Current Workflow (Until PayPal Enables Sending)

### What Happens Now

When someone registers:
1. ✅ Invoice is **created** automatically in PayPal (Draft status)
2. ✅ Registration is **saved** to Supabase database with invoice details
3. ❌ Invoice **CANNOT be sent** (PayPal account restriction)
4. ℹ️ Customer sees message: "You'll receive email in next few minutes"

### The Problem

**You CANNOT send invoices** - neither via API nor manually from PayPal dashboard.
Error: "Sorry, we couldn't create your invoice. Please contact our customer service team."

### The Solution

**CONTACT PAYPAL SUPPORT IMMEDIATELY** to enable invoice sending on your account.

---

## 📋 Daily Workflow

### Morning Routine:
1. Check Supabase → `registrations` table for new entries
2. Go to PayPal → Invoicing
3. Send all Draft invoices
4. Customer receives email and pays

### When Customer Pays:
1. PayPal webhook automatically updates Supabase
2. `payment_status` changes from `pending` to `paid`
3. No manual action needed!

---

## 🔧 URGENT: Contact PayPal Support

This is the ONLY way to fix the issue:

### Contact PayPal Business Support NOW

1. Login to https://www.paypal.com
2. Go to **Help** → **Contact Us**
3. Select: **Invoicing** → **Can't send invoice**
4. Choose **Message us** or **Call us** (calling is faster)
5. Use this message:

   ```
   Subject: Unable to Send Invoices - REQUEST_REJECTED Error

   Hello,

   I have a PayPal Business account and I'm unable to send invoices either
   through the dashboard or via the Invoicing API v2.

   Account email: huascaran360mtb@gmail.com
   Business name: Huascaran 360 MTB

   ISSUE:
   - I can CREATE invoices successfully
   - Invoices appear in Draft status
   - When I click "Send" in dashboard, I get: "Sorry, we couldn't create
     your invoice. Please contact our customer service team."
   - API returns: REQUEST_REJECTED / UNPROCESSABLE_ENTITY
   - Debug ID: 0eb7d8f2dd6b3

   My account is fully verified and Invoicing is enabled in my API app.
   Please enable invoice sending for my account.

   Thank you!
   ```

### While Waiting for PayPal Response

Check these in your account:
1. **Settings → Account Status** - Any limitations?
2. **Settings → Business Information** - Fully verified?
3. Check if there are any pending verification steps

### Option 2: Check API App Permissions

1. Go to https://developer.paypal.com/dashboard
2. Your App → **App Settings**
3. Check **"Features"** section
4. Make sure **"Invoicing"** is enabled
5. If not available, contact PayPal support

### Option 3: Create New API App

Sometimes creating a fresh API app with invoicing enabled works:

1. PayPal Developer Dashboard → **My Apps & Credentials**
2. **Create App**
3. Name: "Huascaran360 Invoicing"
4. Enable **"Invoicing"** feature
5. Copy new Client ID and Secret
6. Update Vercel environment variables

---

## 📊 Monitoring Invoices

### View All Invoices:
https://www.paypal.com/invoice

### Filter Draft Invoices:
1. Click **"Invoices"** tab
2. Filter by **"Status: Draft"**
3. Send all drafts

### Check Stats:
- Vercel → Your stats API: `/api/stats`
- Shows total registrations vs paid

---

## ⚡ Automation Alternative

If manual sending is too tedious, you could:

1. **Use PayPal Buttons** instead of invoices (different API)
2. **Use Stripe** instead (easier API permissions)
3. **Accept bank transfers** and manually mark as paid

But for now, manual invoice sending works fine! It only takes a few seconds per invoice.

---

## ✅ Checklist for Each Registration

- [ ] Registration appears in Supabase
- [ ] Draft invoice appears in PayPal
- [ ] Manually send invoice from PayPal
- [ ] Customer receives email
- [ ] Customer pays
- [ ] Webhook updates status to 'paid'

---

**Once PayPal enables API sending, you won't need to do any manual steps!** Everything will be automatic. 🎉
