# 🔄 Migration Summary: n8n → Vercel

## What Changed

### Before (n8n + Google Sheets)
```
[Website Form] → [n8n Webhook] → [Google Sheets] → [PayPal API]
                                   ↓
                          [PayPal Webhook] → [n8n] → [Update Sheet]
```

### After (Vercel Serverless)
```
[Website Form] → [Vercel API /api/register] → [Vercel Postgres] → [PayPal API]
                                                     ↓
                          [PayPal Webhook] → [Vercel API /api/webhooks/paypal] → [Update DB]
```

---

## 📁 New Files Created

### API Routes (Serverless Functions)
- `api/register.js` - Registration endpoint
- `api/webhooks/paypal.js` - Payment webhook handler
- `api/stats.js` - Admin statistics endpoint

### Helper Modules
- `api/lib/db.js` - Database operations
- `api/lib/paypal.js` - PayPal integration
- `api/lib/pricing.js` - Pricing logic
- `api/lib/schema.sql` - Database schema

### Configuration
- `package.json` - Dependencies
- `.gitignore` - Ignore sensitive files

### Documentation
- `VERCEL_SETUP_GUIDE.md` - Complete setup instructions
- `QUICK_START.md` - Quick reference
- `MIGRATION_SUMMARY.md` - This file

---

## 📝 Modified Files

### Frontend
- `script.js` - Updated to use `/api/register` instead of n8n webhook
- `index.html` - Removed n8n webhook URL configuration

### No Changes Needed
- `style.css` - No changes
- `route-animation.js` - No changes
- All images and assets - No changes

---

## 🗑️ Files You Can Delete (After Migration is Complete)

These are no longer needed:
- `paypal-workflow.json` - Old n8n workflow
- `PAYPAL_AUTOMATION_README.md` - Old setup instructions
- `GOOGLE_SHEETS_SETUP.md` - No longer using Sheets

**Don't delete yet!** Keep them until you've tested the new system.

---

## 🎯 Key Improvements

### 1. **No External Dependencies**
- **Before:** Relied on external n8n server
- **After:** Everything runs on Vercel

### 2. **Proper Database**
- **Before:** Google Sheets (slow, not designed for databases)
- **After:** PostgreSQL with indexes, transactions, proper types

### 3. **Better Performance**
- **Before:** Multiple API hops (website → n8n → sheets → n8n → paypal)
- **After:** Direct serverless functions (website → vercel → postgres → paypal)

### 4. **Version Control**
- **Before:** n8n workflow stored separately
- **After:** All logic in Git repository

### 5. **Better Monitoring**
- **Before:** Had to check n8n logs separately
- **After:** Vercel built-in monitoring and logs

### 6. **Cost**
- **Before:** Free (but limited by n8n server availability)
- **After:** Free + Vercel's generous free tier + auto-scaling

### 7. **Security**
- **Before:** Credentials in n8n UI
- **After:** Environment variables properly secured

---

## 🔄 Migration Checklist

- [ ] Install dependencies (`npm install`)
- [ ] Create Vercel Postgres database
- [ ] Run database schema SQL
- [ ] Add PayPal environment variables
- [ ] Deploy to Vercel
- [ ] Configure PayPal webhook
- [ ] Test registration flow
- [ ] Verify payment webhook works
- [ ] Test with real payment (sandbox)
- [ ] Update early bird slots count
- [ ] Switch to production PayPal credentials
- [ ] Remove old n8n workflow files

---

## 📊 Database Schema

### `config` table
Stores configuration values (like early bird slots remaining)

| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key |
| key | VARCHAR(50) | Config key |
| value | TEXT | Config value |
| updated_at | TIMESTAMP | Last update |

### `registrations` table
Stores all race registrations

| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key |
| invoice_number | VARCHAR(100) | Unique invoice # |
| invoice_id | VARCHAR(100) | PayPal invoice ID |
| paypal_url | TEXT | Payment URL |
| name | VARCHAR(255) | Participant name |
| email | VARCHAR(255) | Email address |
| phone | VARCHAR(50) | Phone number |
| category | VARCHAR(100) | Race category |
| comments | TEXT | Optional comments |
| price | DECIMAL(10,2) | Price in USD |
| price_type | VARCHAR(50) | early_bird/stage_2/regular |
| payment_status | VARCHAR(50) | pending/paid |
| payment_date | TIMESTAMP | Payment date |
| created_at | TIMESTAMP | Registration date |
| updated_at | TIMESTAMP | Last update |

---

## 🔌 API Endpoints

### POST `/api/register`
Creates new registration + PayPal invoice

**Request:**
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "telefono": "+51 974 840 988",
  "categoria": "Open Masculino",
  "mensaje": "Optional message"
}
```

**Response:**
```json
{
  "success": true,
  "price": 450,
  "priceType": "early_bird",
  "invoiceNumber": "H360-1234567890-123",
  "invoiceId": "INV2-XXXX-XXXX",
  "paypalUrl": "https://paypal.com/invoice/p/..."
}
```

### POST `/api/webhooks/paypal`
Receives PayPal payment confirmations

**Webhook Event:** `INVOICING.INVOICE.PAID`

### GET `/api/stats`
Returns registration statistics

**Headers:** `Authorization: Bearer <ADMIN_SECRET_TOKEN>`

**Response:**
```json
{
  "success": true,
  "stats": {
    "totalRegistrations": 10,
    "paidRegistrations": 8,
    "pendingRegistrations": 2,
    "earlyBirdUsed": 5,
    "earlyBirdRemaining": 45,
    "totalRevenue": 3900.00
  }
}
```

---

## 🎓 How It Works

### Registration Flow

1. **User submits form** on website
2. **Frontend calls** `/api/register` with form data
3. **API checks** early bird slots in database
4. **API calculates** price based on date and slots
5. **API creates** PayPal invoice via PayPal API
6. **API saves** registration to database (status: pending)
7. **API decrements** early bird slot if applicable
8. **API returns** PayPal URL to frontend
9. **Frontend redirects** user to PayPal
10. **User completes** payment on PayPal

### Payment Confirmation Flow

1. **User pays** on PayPal
2. **PayPal sends** webhook to `/api/webhooks/paypal`
3. **API receives** `INVOICING.INVOICE.PAID` event
4. **API updates** registration status to "paid" in database

---

## 🚨 Important Notes

### PayPal Sandbox vs Production

**Testing (Sandbox):**
```env
PAYPAL_ENVIRONMENT=sandbox
```
Use sandbox credentials from PayPal Developer Dashboard

**Production (Live):**
```env
PAYPAL_ENVIRONMENT=production
```
Use production credentials from PayPal Business account

### Environment Variables

All environment variables are set in Vercel Dashboard:
- Settings → Environment Variables
- Set for all environments (Production, Preview, Development)

### Database Backups

Vercel Postgres (Neon) automatically backs up your database.
You can also export data manually:
```sql
SELECT * FROM registrations;
```

---

## 📈 Scalability

The new system auto-scales:
- **Database:** Vercel Postgres scales automatically
- **API Functions:** Serverless, scale to zero when idle
- **Concurrent requests:** Handles multiple registrations simultaneously
- **Geographic distribution:** Vercel edge network

---

## ✅ Testing Checklist

Before going live:

### Sandbox Testing
- [ ] Register with test data
- [ ] Verify database entry created
- [ ] Complete payment in PayPal Sandbox
- [ ] Verify payment_status updates to "paid"
- [ ] Check early bird slot decremented

### Production Testing
- [ ] Switch to production PayPal credentials
- [ ] Update webhook to production URL
- [ ] Test one real registration
- [ ] Verify email received from PayPal
- [ ] Confirm database entry
- [ ] Complete real payment
- [ ] Verify payment confirmation

---

## 🎉 Migration Complete!

You've successfully migrated from n8n + Google Sheets to Vercel + Postgres!

**What you gained:**
- ✅ Professional database
- ✅ Better performance
- ✅ No external dependencies
- ✅ Version controlled code
- ✅ Built-in monitoring
- ✅ Auto-scaling
- ✅ All free tier!

**Next steps:**
1. Follow [QUICK_START.md](QUICK_START.md) for setup
2. Read [VERCEL_SETUP_GUIDE.md](VERCEL_SETUP_GUIDE.md) for details
3. Test thoroughly in sandbox
4. Go live! 🚀
