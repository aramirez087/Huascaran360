# 🚀 Vercel Setup Guide - Huascarán 360 MTB

This guide will walk you through setting up your registration system on Vercel with Postgres database (completely free tier).

---

## 📋 What We Built

Your new registration system includes:
- ✅ **Vercel Serverless Functions** - No more external n8n dependency
- ✅ **Vercel Postgres Database** - Free 512MB database (replaces Google Sheets)
- ✅ **PayPal Integration** - Automatic invoice creation and payment tracking
- ✅ **Webhook Handler** - Automatic payment status updates
- ✅ **Admin Stats API** - View registration statistics

---

## 🎯 Step 1: Install Dependencies

First, install the required npm package:

```bash
npm install
```

This installs `@vercel/postgres` which is needed for database connections.

---

## 🗄️ Step 2: Create Vercel Postgres Database

### In Vercel Dashboard:

1. Go to https://vercel.com/dashboard
2. Select your project: **Huascaran360**
3. Click on the **"Storage"** tab at the top
4. Click **"Create Database"**
5. Select **"Postgres"** (powered by Neon)
6. Choose **"Continue"** with the free Hobby plan
7. Give it a name: `huascaran360-db`
8. Click **"Create"**

✅ **Done!** Your database is now created and automatically linked to your project.

---

## 🏗️ Step 3: Initialize Database Schema

You need to run the SQL schema to create the tables. You have two options:

### Option A: Using Vercel Dashboard (Easiest)

1. In your Vercel project, go to **Storage** tab
2. Click on your **huascaran360-db** database
3. Click on the **"Query"** tab
4. Copy the contents of `api/lib/schema.sql`
5. Paste into the query editor
6. Click **"Run Query"**

✅ This creates your tables: `config` and `registrations`

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI if you don't have it
npm i -g vercel

# Pull environment variables
vercel env pull .env.local

# Connect to your database (you'll need a postgres client)
# Then run: psql <YOUR_DATABASE_URL> < api/lib/schema.sql
```

---

## 🔑 Step 4: Set Up Environment Variables

### Required Environment Variables:

Go to your Vercel project → **Settings** → **Environment Variables** and add:

#### 1. PayPal Credentials (Required)

```
PAYPAL_CLIENT_ID=<your-paypal-client-id>
PAYPAL_CLIENT_SECRET=<your-paypal-client-secret>
PAYPAL_ENVIRONMENT=sandbox  # Use "production" when going live
PAYPAL_INVOICER_EMAIL=huascaran360mtb@gmail.com
```

**Where to get PayPal credentials:**
- Go to https://developer.paypal.com
- Log in with your PayPal Business account
- Go to "My Apps & Credentials"
- Create a new app or use existing one
- Copy **Client ID** and **Secret**

#### 2. Admin Token (Optional but recommended)

```
ADMIN_SECRET_TOKEN=<your-secret-token>
```

Generate a random token for the stats API:
```bash
# On Mac/Linux:
openssl rand -hex 32

# Or use any random string like:
# h360_admin_2026_secure_token_xyz123
```

#### 3. Database Connection (Automatic)

Vercel automatically sets these when you create the database:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`

✅ You don't need to add these manually!

### How to add environment variables:

1. In Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add each variable with the format: `KEY=value`
3. Select all environments: **Production**, **Preview**, **Development**
4. Click **"Save"**

---

## 🔗 Step 5: Configure PayPal Webhook

PayPal needs to notify your system when payments are completed.

### Set up PayPal Webhook:

1. Go to https://developer.paypal.com/dashboard
2. Select your app
3. Scroll down to **"Webhooks"**
4. Click **"Add Webhook"**
5. Enter your webhook URL:
   ```
   https://huascaran360mtb.com/api/webhooks/paypal
   ```
   (Replace with your actual Vercel domain)
6. Under **"Event types"**, select:
   - ✅ **Invoicing - Invoice paid** (`INVOICING.INVOICE.PAID`)
7. Click **"Save"**

✅ PayPal will now notify your system when invoices are paid!

---

## 🚀 Step 6: Deploy to Vercel

### Deploy your changes:

```bash
# Make sure you're in the project directory
cd c:\code\Huascaran360

# Stage all files
git add .

# Commit changes
git commit -m "Migrated from n8n to Vercel Postgres with serverless functions"

# Push to GitHub (Vercel will auto-deploy)
git push origin main
```

**Or deploy manually:**
```bash
vercel --prod
```

---

## ✅ Step 7: Test Your System

### Test Registration Flow:

1. Go to your website: https://huascaran360mtb.com
2. Navigate to **Inscripciones** section
3. Fill out the registration form
4. Submit the form

**What should happen:**
- ✅ You get a success message with the price
- ✅ You're redirected to PayPal invoice page
- ✅ Registration is saved to database

### Verify Database Entry:

1. Go to Vercel Dashboard → Storage → huascaran360-db
2. Click **"Data"** tab
3. Select `registrations` table
4. You should see your test registration

### Test Payment Webhook:

1. Complete the PayPal payment (use Sandbox if testing)
2. Check your database again
3. The `payment_status` should change from `pending` to `paid`

---

## 📊 Step 8: View Registration Statistics

You can query registration stats using the admin API:

```bash
curl -H "Authorization: Bearer YOUR_ADMIN_SECRET_TOKEN" \
     https://huascaran360mtb.com/api/stats
```

**Response:**
```json
{
  "success": true,
  "stats": {
    "totalRegistrations": 5,
    "paidRegistrations": 3,
    "pendingRegistrations": 2,
    "earlyBirdUsed": 4,
    "earlyBirdRemaining": 46,
    "totalRevenue": 1350.00
  }
}
```

---

## 🎛️ Managing Early Bird Slots

### Check Current Slots:

In Vercel Dashboard → Storage → Query tab:

```sql
SELECT * FROM config WHERE key = 'early_bird_slots';
```

### Update Slots:

```sql
UPDATE config
SET value = '100'
WHERE key = 'early_bird_slots';
```

This will set available early bird slots to 100.

---

## 🔧 Troubleshooting

### Issue: Database connection errors

**Solution:**
- Verify database is created in Vercel Storage tab
- Check environment variables are set
- Redeploy your project

### Issue: PayPal invoice not created

**Solution:**
- Check PayPal credentials in environment variables
- Verify `PAYPAL_ENVIRONMENT` is set correctly
- Check Vercel function logs: Dashboard → Deployments → Latest → Functions

### Issue: Webhook not working

**Solution:**
- Verify webhook URL in PayPal dashboard matches your Vercel domain
- Check Vercel function logs for webhook errors
- Make sure webhook is set to `INVOICING.INVOICE.PAID` event

### Issue: CORS errors in browser

**Solution:**
- The API routes already have CORS headers configured
- If issues persist, check browser console for specific error
- Verify you're using the correct API endpoint `/api/register`

---

## 📈 Going to Production

### Before going live:

- [ ] Switch PayPal from Sandbox to Production:
  ```
  PAYPAL_ENVIRONMENT=production
  ```
- [ ] Update PayPal credentials to production ones
- [ ] Update PayPal webhook URL to production domain
- [ ] Test complete registration flow in production
- [ ] Set initial early bird slots count:
  ```sql
  UPDATE config SET value = '50' WHERE key = 'early_bird_slots';
  ```
- [ ] Remove test registrations from database
- [ ] Monitor Vercel function logs during first few registrations

---

## 🎉 Benefits of This New System

### Compared to n8n + Google Sheets:

✅ **Faster** - Vercel Edge Functions are closer to users
✅ **More Reliable** - No external dependencies (n8n server)
✅ **Free** - Vercel free tier is generous
✅ **Version Controlled** - All code in your Git repo
✅ **Better Security** - Environment variables properly secured
✅ **Scalable** - Handles traffic spikes automatically
✅ **Professional Database** - Proper indexes, transactions, backups
✅ **Better Monitoring** - Vercel analytics and logs built-in

---

## 📊 Database Schema Reference

### `config` table:
- `id` - Primary key
- `key` - Config key (e.g., 'early_bird_slots')
- `value` - Config value
- `updated_at` - Last update timestamp

### `registrations` table:
- `id` - Primary key
- `invoice_number` - Unique invoice number (H360-xxx)
- `invoice_id` - PayPal invoice ID
- `paypal_url` - PayPal payment URL
- `name` - Participant name
- `email` - Participant email
- `phone` - Participant phone
- `category` - Race category
- `comments` - Optional comments
- `price` - Registration price (USD)
- `price_type` - 'early_bird', 'stage_2', or 'regular'
- `payment_status` - 'pending' or 'paid'
- `payment_date` - Payment completion date
- `created_at` - Registration timestamp
- `updated_at` - Last update timestamp

---

## 🆘 Need Help?

### Check Vercel Logs:
1. Go to Vercel Dashboard → Deployments
2. Click on latest deployment
3. Click on **"Functions"** tab
4. View logs for `/api/register` or `/api/webhooks/paypal`

### Database Queries:
View all registrations:
```sql
SELECT * FROM registrations ORDER BY created_at DESC LIMIT 10;
```

Count paid registrations:
```sql
SELECT COUNT(*) FROM registrations WHERE payment_status = 'paid';
```

Total revenue:
```sql
SELECT SUM(price) FROM registrations WHERE payment_status = 'paid';
```

---

## ✅ Setup Complete!

Your registration system is now fully migrated to Vercel with:
- ✅ Serverless API functions
- ✅ Postgres database
- ✅ PayPal integration
- ✅ Automatic payment tracking
- ✅ Admin statistics

**No more n8n or Google Sheets needed!** 🎉

Everything runs on Vercel's free tier and scales automatically. Welcome to modern serverless infrastructure! 🚀
