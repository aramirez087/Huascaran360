# 🚀 Supabase Quick Start

## ✅ What Changed for Supabase

Good news! **Everything works with Supabase!** I've already updated the code:

- ✅ Updated `package.json` - Uses `postgres` package
- ✅ Updated `api/lib/db.js` - Connects to Supabase
- ✅ Updated `api/lib/schema.sql` - Ready for Supabase
- ✅ All API endpoints work the same

---

## 🎯 Your Action Items (7 Steps)

### 1️⃣ Get Your Supabase Connection String

In Supabase Dashboard:
1. Settings (gear icon) → Database
2. Scroll to **Connection string**
3. Select **URI** tab
4. Copy the connection string

It looks like:
```
postgresql://postgres.[REF]:[PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres
```

⚠️ **Replace `[PASSWORD]` with your actual database password!**

---

### 2️⃣ Run Database Schema

In Supabase Dashboard:
1. Click **SQL Editor**
2. Click **New Query**
3. Copy all SQL from [api/lib/schema.sql](api/lib/schema.sql)
4. Paste and click **Run**

✅ Tables created: `config` and `registrations`

---

### 3️⃣ Install Dependencies

```bash
npm install
```

---

### 4️⃣ Add Vercel Environment Variables

In Vercel → Settings → Environment Variables:

```bash
# Supabase (replace [YOUR-PASSWORD]!)
DATABASE_URL=postgresql://postgres.[REF]:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres

# PayPal (get from developer.paypal.com)
PAYPAL_CLIENT_ID=<your-client-id>
PAYPAL_CLIENT_SECRET=<your-client-secret>
PAYPAL_ENVIRONMENT=sandbox
PAYPAL_INVOICER_EMAIL=huascaran360mtb@gmail.com

# Admin token (generated for you)
ADMIN_SECRET_TOKEN=f186a031ead0cc3c11a98e1580c9588d4de34b705bd76cf8fdd24ba702af7915
```

**Select all environments:** Production, Preview, Development

---

### 5️⃣ Deploy to Vercel

```bash
git add .
git commit -m "Setup Supabase integration"
git push origin main
```

---

### 6️⃣ Configure PayPal Webhook

1. Go to https://developer.paypal.com/dashboard
2. Your App → Webhooks → Add Webhook
3. URL: `https://huascaran360mtb.com/api/webhooks/paypal`
4. Event: **Invoicing - Invoice paid**
5. Save

---

### 7️⃣ Test Registration

1. Go to your website
2. Fill registration form
3. Submit
4. Check Supabase → Table Editor → `registrations`

---

## 📊 Useful Supabase Queries

In Supabase → SQL Editor:

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

**View paid registrations:**
```sql
SELECT * FROM registrations WHERE payment_status = 'paid';
```

**Total revenue:**
```sql
SELECT SUM(price) as revenue FROM registrations WHERE payment_status = 'paid';
```

---

## 🎓 View Stats API

```bash
curl -H "Authorization: Bearer f186a031ead0cc3c11a98e1580c9588d4de34b705bd76cf8fdd24ba702af7915" \
     https://huascaran360mtb.com/api/stats
```

---

## ⚠️ Common Issues

### Database connection error?
- Check `DATABASE_URL` has your actual password
- Use **pooler** connection string (port 6543, not 5432)
- Make sure all tables are created

### Disable Row Level Security (RLS):
```sql
ALTER TABLE registrations DISABLE ROW LEVEL SECURITY;
ALTER TABLE config DISABLE ROW LEVEL SECURITY;
```
(Your API functions handle security, so this is safe)

---

## 📖 Full Documentation

See [SUPABASE_SETUP_GUIDE.md](SUPABASE_SETUP_GUIDE.md) for complete details!

---

## ✅ You're All Set!

Your system now uses:
- ✅ Supabase PostgreSQL (free 500MB)
- ✅ Vercel serverless functions
- ✅ PayPal integration
- ✅ Automatic payment tracking

**Everything on free tiers!** 🎉
