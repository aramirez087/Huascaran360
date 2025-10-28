# 🚀 Supabase Setup Guide - Huascarán 360 MTB

Perfect choice! Supabase is an excellent PostgreSQL database with a generous free tier. This guide will walk you through the complete setup.

---

## 🎯 What We're Building With

- ✅ **Supabase PostgreSQL** - Free 500MB database
- ✅ **Vercel Serverless Functions** - Your API endpoints
- ✅ **PayPal Integration** - Automatic invoice creation
- ✅ **Webhook Handler** - Auto payment tracking

---

## 📋 Step 1: Get Your Supabase Connection String

You should already have your Supabase database created. Now get the connection string:

### In Supabase Dashboard:

1. Go to https://supabase.com/dashboard
2. Select your **Huascaran360** project
3. Click on the **Settings** icon (gear) in the left sidebar
4. Click on **Database**
5. Scroll down to **Connection string** section
6. Select **URI** tab
7. Click **Copy** to copy the connection string

It looks like:
```
postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres
```

⚠️ **Important:** The `[PASSWORD]` placeholder needs to be replaced with your actual database password!

---

## 🗄️ Step 2: Initialize Database Schema

### Option A: Using Supabase SQL Editor (Easiest)

1. In your Supabase dashboard, click **SQL Editor** in the left sidebar
2. Click **New Query**
3. Copy the entire contents of [api/lib/schema.sql](api/lib/schema.sql)
4. Paste into the query editor
5. Click **Run** (or press Ctrl/Cmd + Enter)

✅ This creates your `config` and `registrations` tables!

### Option B: Using Supabase Table Editor

If you prefer a visual approach:
1. Click **Table Editor** in sidebar
2. Click **New Table**
3. Follow the schema from [api/lib/schema.sql](api/lib/schema.sql)

**But Option A is much faster!** 😉

---

## 🔑 Step 3: Set Up Vercel Environment Variables

### In Vercel Dashboard:

1. Go to https://vercel.com/dashboard
2. Select your **Huascaran360** project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

### Required Variables:

#### 1. Supabase Database URL
```
DATABASE_URL=postgresql://postgres.[PROJECT-REF]:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres
```
⚠️ **Replace `[YOUR-PASSWORD]`** with your actual Supabase database password!

#### 2. PayPal Credentials
```
PAYPAL_CLIENT_ID=<your-paypal-client-id>
PAYPAL_CLIENT_SECRET=<your-paypal-client-secret>
PAYPAL_ENVIRONMENT=sandbox
PAYPAL_INVOICER_EMAIL=huascaran360mtb@gmail.com
```

**Where to get PayPal credentials:**
- Go to https://developer.paypal.com
- Log in → My Apps & Credentials
- Create new app or use existing
- Copy **Client ID** and **Secret**

#### 3. Admin Token (for statistics API)
```
ADMIN_SECRET_TOKEN=f186a031ead0cc3c11a98e1580c9588d4de34b705bd76cf8fdd24ba702af7915
```

### How to Add Variables in Vercel:

For each variable:
1. Click **Add New**
2. Enter **Key** (e.g., `DATABASE_URL`)
3. Enter **Value**
4. Select **all environments**: Production, Preview, Development
5. Click **Save**

---

## 📦 Step 4: Install Dependencies

In your local project directory:

```bash
npm install
```

This installs the `postgres` package for database connections.

---

## 🔗 Step 5: Configure PayPal Webhook

PayPal needs to notify your system when payments complete.

### Set up PayPal Webhook:

1. Go to https://developer.paypal.com/dashboard
2. Select your app
3. Scroll to **Webhooks** section
4. Click **Add Webhook**
5. Enter webhook URL:
   ```
   https://huascaran360mtb.com/api/webhooks/paypal
   ```
   (Replace with your actual domain if different)
6. Under **Event types**, select:
   - ✅ **Invoicing - Invoice paid** (`INVOICING.INVOICE.PAID`)
7. Click **Save**

---

## 🚀 Step 6: Deploy to Vercel

```bash
# Stage all files
git add .

# Commit changes
git commit -m "Setup Supabase database integration"

# Push to GitHub (triggers auto-deploy)
git push origin main
```

Or deploy manually:
```bash
vercel --prod
```

---

## ✅ Step 7: Test Your System

### Test Registration Flow:

1. Go to https://huascaran360mtb.com
2. Navigate to **Inscripciones** section
3. Fill out the registration form with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: +51 974 840 988
   - Category: Open Masculino
4. Click **Continuar al pago con PayPal**

**What should happen:**
- ✅ Success message with price
- ✅ Redirect to PayPal invoice
- ✅ Registration saved to Supabase

### Verify in Supabase:

1. Go to Supabase Dashboard
2. Click **Table Editor**
3. Select `registrations` table
4. You should see your test registration!

### Test Payment Webhook:

1. Complete the PayPal payment (use Sandbox for testing)
2. Check Supabase `registrations` table again
3. The `payment_status` should update from `pending` to `paid`

---

## 📊 Step 8: View Registration Statistics

Query the stats API:

```bash
curl -H "Authorization: Bearer f186a031ead0cc3c11a98e1580c9588d4de34b705bd76cf8fdd24ba702af7915" \
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

## 🎛️ Managing Settings in Supabase

### Check Early Bird Slots:

In Supabase → SQL Editor → New Query:

```sql
SELECT * FROM config WHERE key = 'early_bird_slots';
```

### Update Early Bird Slots:

```sql
UPDATE config
SET value = '100'
WHERE key = 'early_bird_slots';
```

### View All Registrations:

```sql
SELECT * FROM registrations ORDER BY created_at DESC;
```

### View Paid Registrations:

```sql
SELECT * FROM registrations
WHERE payment_status = 'paid'
ORDER BY created_at DESC;
```

### Total Revenue:

```sql
SELECT
  COUNT(*) as total_registrations,
  SUM(price) as total_revenue
FROM registrations
WHERE payment_status = 'paid';
```

---

## 🔧 Troubleshooting

### Issue: Database connection error

**Check:**
- Is `DATABASE_URL` set correctly in Vercel?
- Did you replace `[YOUR-PASSWORD]` with actual password?
- Is the connection string using **pooler** mode?
  ```
  ...pooler.supabase.com:6543/postgres  ✅ Correct
  ...supabase.co:5432/postgres          ❌ Wrong (direct mode)
  ```

**Solution:**
Use the **Transaction pooler** connection string from Supabase for serverless functions.

### Issue: Tables not created

**Solution:**
1. Go to Supabase → SQL Editor
2. Run the schema.sql file again
3. Check Table Editor to verify tables exist

### Issue: PayPal invoice not created

**Solution:**
- Verify PayPal credentials in Vercel environment variables
- Check Vercel function logs: Dashboard → Deployments → Functions
- Ensure `PAYPAL_ENVIRONMENT` is set to `sandbox` for testing

### Issue: Payment status not updating

**Solution:**
- Verify webhook URL in PayPal dashboard matches your domain
- Check Vercel function logs for webhook errors
- Ensure webhook event type is `INVOICING.INVOICE.PAID`

---

## 🔒 Supabase Security Best Practices

### Row Level Security (RLS)

Supabase has RLS enabled by default. For the API to work, you need to either:

**Option A: Use service_role key (for API functions)**
Your `DATABASE_URL` uses the postgres user which bypasses RLS ✅

**Option B: Disable RLS on your tables (simpler)**
```sql
ALTER TABLE registrations DISABLE ROW LEVEL SECURITY;
ALTER TABLE config DISABLE ROW LEVEL SECURITY;
```

Since your API functions handle all the security and these tables aren't exposed to frontend, this is safe.

---

## 📈 Supabase Benefits

### Advantages over other solutions:

✅ **Free Tier** - 500MB database, 2GB bandwidth
✅ **Auto Backups** - Daily backups included
✅ **SQL Editor** - Built-in query interface
✅ **Table Editor** - Visual database management
✅ **Real-time** - WebSocket support (if needed later)
✅ **Auth** - Built-in authentication (if needed)
✅ **Storage** - File storage available
✅ **Monitoring** - Query performance insights

---

## 🎓 Understanding the Architecture

```
User submits form
       ↓
[Vercel API /api/register]
       ↓
[Supabase PostgreSQL] ← Stores registration
       ↓
[PayPal API] ← Creates invoice
       ↓
User redirected to PayPal
       ↓
User pays
       ↓
[PayPal Webhook] → [Vercel API /api/webhooks/paypal]
       ↓
[Supabase PostgreSQL] ← Updates payment status
```

---

## 📊 Database Schema Reference

### `config` table:
```sql
id            | SERIAL      | Primary key
key           | VARCHAR(50) | Config key (e.g., 'early_bird_slots')
value         | TEXT        | Config value
updated_at    | TIMESTAMP   | Auto-updated timestamp
```

### `registrations` table:
```sql
id            | SERIAL         | Primary key
invoice_number| VARCHAR(100)   | Unique invoice # (H360-xxx)
invoice_id    | VARCHAR(100)   | PayPal invoice ID
paypal_url    | TEXT           | PayPal payment URL
name          | VARCHAR(255)   | Participant name
email         | VARCHAR(255)   | Email address
phone         | VARCHAR(50)    | Phone number
category      | VARCHAR(100)   | Race category
comments      | TEXT           | Optional comments
price         | DECIMAL(10,2)  | Price in USD
price_type    | VARCHAR(50)    | early_bird/stage_2/regular
payment_status| VARCHAR(50)    | pending/paid
payment_date  | TIMESTAMP      | Payment completion date
created_at    | TIMESTAMP      | Registration timestamp
updated_at    | TIMESTAMP      | Auto-updated timestamp
```

---

## 🚦 Going to Production

### Before launching:

- [ ] Test complete registration flow in Sandbox
- [ ] Verify payment webhook works
- [ ] Set early bird slots to desired count (e.g., 50)
- [ ] Switch PayPal to production:
  ```
  PAYPAL_ENVIRONMENT=production
  ```
- [ ] Update PayPal credentials to production keys
- [ ] Update PayPal webhook to production URL
- [ ] Clear test registrations from database
- [ ] Test one real registration end-to-end
- [ ] Monitor Vercel function logs during first registrations

---

## 💾 Backup Your Data

### Export registrations to CSV:

In Supabase → Table Editor:
1. Select `registrations` table
2. Click **Export** button
3. Choose **CSV**
4. Download file

### Backup via SQL:

```sql
COPY (SELECT * FROM registrations ORDER BY created_at DESC)
TO '/tmp/registrations_backup.csv'
WITH CSV HEADER;
```

---

## 🆘 Need Help?

### Supabase Support:
- Documentation: https://supabase.com/docs
- Discord: https://discord.supabase.com

### Check Vercel Logs:
1. Vercel Dashboard → Deployments
2. Latest deployment → Functions
3. View logs for `/api/register` or `/api/webhooks/paypal`

### Check Supabase Logs:
1. Supabase Dashboard → Logs
2. Filter by table or query type

---

## ✅ Setup Complete!

Your registration system is now fully integrated with Supabase! 🎉

**You have:**
- ✅ Supabase PostgreSQL database
- ✅ Vercel serverless API functions
- ✅ PayPal invoice automation
- ✅ Automatic payment tracking
- ✅ Admin statistics API

**All on free tiers!** 🚀

Welcome to your new robust, scalable registration system!
