# 🚀 Quick Start - Your Tasks

## What I Built For You

✅ **API Endpoints** - 3 serverless functions
- `/api/register` - Handles new registrations + PayPal
- `/api/webhooks/paypal` - Receives payment confirmations
- `/api/stats` - View registration statistics

✅ **Database Schema** - PostgreSQL tables (see `api/lib/schema.sql`)
- `config` table - Tracks early bird slots
- `registrations` table - All registration data

✅ **Helper Modules**
- `api/lib/db.js` - Database functions
- `api/lib/paypal.js` - PayPal integration
- `api/lib/pricing.js` - Pricing logic

✅ **Updated Frontend**
- [script.js](script.js) - Now uses `/api/register` instead of n8n
- [index.html](index.html) - Removed n8n webhook URL

---

## 🎯 Your Tasks (In Order)

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Create Vercel Postgres Database
1. Go to https://vercel.com/dashboard
2. Open your **Huascaran360** project
3. Click **Storage** tab
4. Click **Create Database**
5. Select **Postgres** (free tier)
6. Name it: `huascaran360-db`
7. Click **Create**

### 3️⃣ Run Database Schema
1. In Vercel → Storage → Your DB
2. Click **Query** tab
3. Copy all SQL from [api/lib/schema.sql](api/lib/schema.sql)
4. Paste and click **Run Query**

✅ This creates your `config` and `registrations` tables

### 4️⃣ Add Environment Variables
In Vercel → Settings → Environment Variables, add:

```bash
# PayPal (Required)
PAYPAL_CLIENT_ID=<get-from-paypal-developer-dashboard>
PAYPAL_CLIENT_SECRET=<get-from-paypal-developer-dashboard>
PAYPAL_ENVIRONMENT=sandbox
PAYPAL_INVOICER_EMAIL=huascaran360mtb@gmail.com

# Admin Token (Optional)
ADMIN_SECRET_TOKEN=<any-random-string>
```

**Get PayPal credentials:**
- https://developer.paypal.com
- My Apps & Credentials → Create App

### 5️⃣ Deploy to Vercel
```bash
git add .
git commit -m "Migrated to Vercel Postgres"
git push origin main
```

Vercel auto-deploys from GitHub!

### 6️⃣ Configure PayPal Webhook
1. Go to https://developer.paypal.com/dashboard
2. Your App → Webhooks → Add Webhook
3. URL: `https://huascaran360mtb.com/api/webhooks/paypal`
4. Select event: **Invoicing - Invoice paid**
5. Save

### 7️⃣ Test Registration
1. Go to your website
2. Fill registration form
3. Submit
4. Check Vercel → Storage → Data to see the entry!

---

## 📊 How to View Stats

```bash
curl -H "Authorization: Bearer YOUR_ADMIN_SECRET_TOKEN" \
     https://huascaran360mtb.com/api/stats
```

---

## 🔧 Useful Database Queries

In Vercel → Storage → Query tab:

**View all registrations:**
```sql
SELECT * FROM registrations ORDER BY created_at DESC;
```

**Check early bird slots:**
```sql
SELECT * FROM config WHERE key = 'early_bird_slots';
```

**Update early bird count:**
```sql
UPDATE config SET value = '50' WHERE key = 'early_bird_slots';
```

**Count paid registrations:**
```sql
SELECT COUNT(*) FROM registrations WHERE payment_status = 'paid';
```

---

## 📖 Full Documentation

See [VERCEL_SETUP_GUIDE.md](VERCEL_SETUP_GUIDE.md) for complete details!

---

## 🎉 Benefits

**Before (n8n + Google Sheets):**
- ❌ External dependency (n8n server)
- ❌ Manual Google Sheets API setup
- ❌ Complex credential management
- ❌ Harder to debug

**After (Vercel + Postgres):**
- ✅ Everything on Vercel (one place)
- ✅ Professional database with indexes
- ✅ Built-in monitoring & logs
- ✅ Version controlled (all code in Git)
- ✅ Completely free tier
- ✅ Auto-scales with traffic

---

## 🆘 If Something Breaks

**Check Vercel Logs:**
1. Vercel Dashboard → Deployments
2. Latest deployment → Functions tab
3. View logs for errors

**Database Issues:**
- Make sure you ran the schema.sql
- Check environment variables are set
- Redeploy the project

**PayPal Issues:**
- Verify credentials in env variables
- Check webhook URL is correct
- Make sure using SANDBOX for testing

---

## Ready to Go Live?

1. Update environment variable:
   ```
   PAYPAL_ENVIRONMENT=production
   ```
2. Update PayPal credentials to production
3. Update PayPal webhook to production URL
4. Test one registration end-to-end
5. You're live! 🚀

---

**Questions?** Check the full guide or Vercel's function logs!
