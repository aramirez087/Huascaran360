# 📧 Manual Invoice Sending Guide

## Why Manual Sending is Needed

Your PayPal API app doesn't have permission to send invoices automatically. This is a PayPal API restriction that requires contacting PayPal support to resolve.

**Temporary solution:** Manually send invoices from PayPal dashboard after each registration.

---

## 🔄 How to Manually Send Invoices

### Step 1: When Registration Comes In

When someone registers:
1. ✅ Invoice is **created** automatically in PayPal (Draft status)
2. ✅ Registration is **saved** to Supabase database
3. ❌ Invoice is **NOT sent** (due to API restriction)

### Step 2: Send Invoice from PayPal Dashboard

1. Go to https://www.paypal.com/invoice
2. You'll see the new invoice in **"Draft"** status
3. Click on the invoice
4. Click **"Send"** button
5. Confirm the recipient email
6. Click **"Send Invoice"**

Done! The customer will receive the invoice by email.

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

## 🔧 Permanent Fix: Enable API Invoice Sending

To enable automatic sending (so you don't have to manually send):

### Option 1: Contact PayPal Support

1. Log into PayPal Business account
2. Go to **Help** → **Contact Us**
3. Select topic: **"Invoicing"** → **"API and Technical Issues"**
4. Message:
   ```
   Hello,

   I'm using the PayPal Invoicing API v2 to create and send invoices
   programmatically. Invoice creation works, but the /send endpoint
   returns "REQUEST_REJECTED" error.

   App Client ID: [YOUR_CLIENT_ID]
   Error: UNPROCESSABLE_ENTITY when calling
   POST /v2/invoicing/invoices/{invoice_id}/send

   Please enable invoice sending permissions for my API app.

   Thank you!
   ```

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
