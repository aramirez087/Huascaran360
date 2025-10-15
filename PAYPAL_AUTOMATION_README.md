# Huascarán 360 MTB - Automated PayPal Payment System Setup Guide

## 🎯 Overview

This automated payment system handles race registrations with dynamic pricing based on date and availability. No code management needed - participants simply fill out a form and are automatically charged the correct amount.

### Pricing Structure
- **Early Bird:** $450 (limited slots - e.g., first 50 registrations)
- **Stage 2:** $540 (after early bird sells out, until Dec 31, 2025)
- **Regular:** $600 (after Dec 31, 2025 until April 30, 2026)

---

## 📋 Prerequisites

Before starting, you'll need:

1. **n8n Instance** - Cloud or self-hosted
   - Get n8n Cloud: https://n8n.io
   - Or self-host: https://docs.n8n.io/hosting/

2. **PayPal Business Account**
   - Sign up: https://www.paypal.com/business
   - Must have invoicing enabled

3. **Google Account** for Google Sheets

4. **GitHub Pages** (you already have this!) for hosting the website

---

## 🚀 Step-by-Step Setup

### Step 1: Set Up Google Sheets

1. Follow the complete instructions in `GOOGLE_SHEETS_SETUP.md`
2. Create a Google Spreadsheet with two sheets:
   - **Config** sheet (tracks Early Bird slots)
   - **Registrations** sheet (logs all registrations)
3. **Copy your Google Sheet ID** from the URL

---

### Step 2: Configure PayPal API Credentials

#### Get PayPal API Credentials:

1. Go to https://developer.paypal.com
2. Log in with your PayPal Business account
3. Navigate to "My Apps & Credentials"
4. Under "REST API apps", click "Create App"
5. Name it "Huascaran360MTB" and click "Create App"
6. Copy your:
   - **Client ID**
   - **Secret** (click "Show" to reveal it)

#### Set Up PayPal Webhook for Payment Confirmations:

1. In PayPal Developer Dashboard, go to your app
2. Scroll down to "Webhooks"
3. Click "Add Webhook"
4. Enter your webhook URL: `https://YOUR_N8N_INSTANCE/webhook/paypal-webhook`
5. Select event type: **"Invoicing - Invoice paid"** (`INVOICING.INVOICE.PAID`)
6. Click "Save"

---

### Step 3: Import n8n Workflow

1. Open your n8n instance
2. Go to **Workflows** > **Import from File**
3. Select the `n8n-paypal-workflow.json` file
4. The workflow will be imported with all nodes configured

---

### Step 4: Configure n8n Credentials

#### Google Sheets OAuth2:

1. In n8n, go to **Credentials** > **New**
2. Select "Google Sheets OAuth2 API"
3. Follow the OAuth flow to authorize n8n
4. Save the credential as "Google Sheets Account"

#### PayPal API:

1. In n8n, go to **Credentials** > **New**
2. Select "PayPal API"
3. Enter:
   - **Environment:** Production (or Sandbox for testing)
   - **Client ID:** (from Step 2)
   - **Client Secret:** (from Step 2)
4. Save the credential as "PayPal Account"

---

### Step 5: Update Workflow Configuration

Open the imported workflow and update these values:

#### Node: "Read Config (Early Bird Slots)"
- Replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID
- Replace `YOUR_GOOGLE_CREDENTIALS` with your credential name

#### Node: "Create PayPal Invoice"
- Replace `YOUR_PAYPAL_CREDENTIALS` with your credential name
- Update the invoicer email if different from `alexramirez.cr@gmail.com`

#### Node: "Send PayPal Invoice"
- Replace `YOUR_PAYPAL_CREDENTIALS` with your credential name

#### Node: "Log Registration"
- Replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID
- Replace `YOUR_GOOGLE_CREDENTIALS` with your credential name

#### Node: "Decrement Early Bird Slots"
- Replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID
- Replace `YOUR_GOOGLE_CREDENTIALS` with your credential name

#### Node: "Update Payment Status"
- Replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID
- Replace `YOUR_GOOGLE_CREDENTIALS` with your credential name

---

### Step 6: Get Webhook URLs from n8n

1. Open the "Registration Webhook" node
2. Copy the **Production URL**
   - It will look like: `https://your-n8n.com/webhook/huascaran-registration`
3. Open the "PayPal Webhook (Payment Confirmation)" node
4. Copy the **Production URL**
   - It will look like: `https://your-n8n.com/webhook/paypal-webhook`

---

### Step 7: Update Website Configuration

1. Open `index.html`
2. Find this line near the end (around line 791):
   ```html
   const N8N_WEBHOOK_URL = 'https://YOUR_N8N_INSTANCE.com/webhook/huascaran-registration';
   ```
3. Replace with your actual n8n webhook URL from Step 6

---

### Step 8: Activate the Workflow

1. In n8n, open the workflow
2. Click the **"Active"** toggle in the top right
3. The workflow is now live and ready to process registrations!

---

## 🧪 Testing the System

### Test Registration Flow:

1. Open your website locally or on GitHub Pages
2. Navigate to the registration section (#inscripciones)
3. Fill out the registration form:
   - **Name:** Test Participant
   - **Email:** your-test-email@example.com
   - **Phone:** +51 974 840 988
   - **Category:** Open Masculino
4. Click "Continuar al pago con PayPal"
5. Check n8n execution log to see the workflow run
6. You should be redirected to PayPal with the correct amount

### Verify Data:

1. **Check Google Sheets:**
   - Config sheet: Early bird count should decrease by 1
   - Registrations sheet: New row with registration details

2. **Check PayPal:**
   - Log into PayPal Business account
   - Go to "Invoicing"
   - You should see the invoice created

3. **Complete Payment (Optional):**
   - Complete the PayPal payment in Sandbox mode
   - Check that the payment_status in Google Sheets updates to "paid"

---

## 📊 Workflow Architecture

### Main Registration Flow:
```
1. User submits form on website
   ↓
2. Webhook receives registration data
   ↓
3. Read Config sheet (check early bird slots)
   ↓
4. Calculate price based on date & availability
   ↓
5. Create PayPal invoice with calculated price
   ↓
6. Send invoice to participant's email
   ↓
7. Log registration in Google Sheets
   ↓
8. Decrement early bird slot (if applicable)
   ↓
9. Return PayPal URL to website
   ↓
10. User redirected to PayPal to complete payment
```

### Payment Confirmation Flow:
```
1. User completes payment on PayPal
   ↓
2. PayPal sends webhook to n8n
   ↓
3. n8n receives INVOICING.INVOICE.PAID event
   ↓
4. Update registration status to "paid" in Google Sheets
```

---

## 🎨 Customization Options

### Change Early Bird Quantity:
- Open Google Sheets > Config sheet
- Change the number in cell A2 (e.g., from 50 to 100)

### Modify Pricing Tiers:
1. Open n8n workflow
2. Edit the "Calculate Price" Code node
3. Update the price values and dates:
   ```javascript
   const dec31_2025 = new Date('2025-12-31');
   const apr30_2026 = new Date('2026-04-30');

   let price = 600; // Regular price
   // ... modify pricing logic
   ```

### Customize Invoice Details:
1. Open the "Create PayPal Invoice" HTTP Request node
2. Modify the JSON body:
   - Change business name
   - Update item description
   - Add custom notes

### Add Email Notifications:
- Add an "Email" node after "Log Registration"
- Send confirmation email to participants
- Include registration details and next steps

---

## 🔒 Security Best Practices

1. **Environment Variables:**
   - Store sensitive data (API keys) in n8n credentials, not in workflow
   - Never commit credentials to GitHub

2. **HTTPS Only:**
   - Ensure n8n webhooks use HTTPS
   - GitHub Pages automatically uses HTTPS

3. **Data Protection:**
   - Limit Google Sheets access to necessary team members only
   - Use Google Sheets data protection features
   - Regular backups of registration data

4. **PayPal Security:**
   - Use Production credentials only for live registrations
   - Use Sandbox for all testing
   - Monitor PayPal dashboard for suspicious activity

5. **Testing:**
   - Always test in PayPal Sandbox before going live
   - Create test registrations to verify the complete flow
   - Check all webhook endpoints are responding

---

## 📈 Monitoring and Maintenance

### Daily Checks:
- [ ] Monitor n8n execution logs for errors
- [ ] Check Google Sheets for new registrations
- [ ] Verify PayPal invoices are being created

### Weekly Checks:
- [ ] Review early bird slot count
- [ ] Export registration data for backup
- [ ] Check payment confirmation rate

### Before Race Dates:
- [ ] Verify date-based pricing transitions are working
- [ ] Confirm Dec 31, 2025 price change to $600
- [ ] Final registration count and financial reconciliation

---

## 🐛 Troubleshooting

### Issue: Form submission fails with error
**Solution:**
- Check n8n workflow is active
- Verify webhook URL in index.html is correct
- Check n8n execution logs for detailed error

### Issue: Price not calculating correctly
**Solution:**
- Open "Calculate Price" node in n8n
- Check date logic and early bird slot logic
- Verify Config sheet has correct values

### Issue: PayPal invoice not created
**Solution:**
- Verify PayPal credentials in n8n
- Check PayPal API credentials are for Production (not Sandbox)
- Review n8n execution error details

### Issue: Payment status not updating after payment
**Solution:**
- Verify PayPal webhook is configured correctly
- Check "PayPal Webhook" node is active in n8n
- Confirm webhook URL matches n8n webhook URL
- Check PayPal Developer dashboard for webhook delivery status

### Issue: Google Sheets not updating
**Solution:**
- Verify Google Sheets credentials have "Editor" permission
- Check Sheet ID is correct in all nodes
- Confirm sheet names are exactly "Config" and "Registrations"

---

## 📞 Support

For technical support:
- **Email:** huascaran360mtb@gmail.com
- **Phone:** +51 974 840 988 (Frank Rocha)

For n8n-specific questions:
- n8n Documentation: https://docs.n8n.io
- n8n Community Forum: https://community.n8n.io

---

## ✅ Checklist: Ready to Go Live

Before launching to participants:

- [ ] Google Sheets created with Config and Registrations sheets
- [ ] Early bird slot count configured (e.g., 50 in Config sheet)
- [ ] PayPal API credentials configured in n8n
- [ ] Google Sheets credentials configured in n8n
- [ ] n8n workflow imported and all placeholder IDs replaced
- [ ] Webhook URLs updated in index.html
- [ ] PayPal webhook configured for payment confirmations
- [ ] Test registration completed successfully end-to-end
- [ ] Test payment completed and status updated in sheet
- [ ] n8n workflow activated (toggle in top right)
- [ ] Website deployed to GitHub Pages with updated code
- [ ] Team members know how to monitor Google Sheets
- [ ] Backup plan documented in case of issues

---

## 🎉 You're All Set!

Your automated PayPal payment system is now ready to handle race registrations with dynamic pricing. The system will:

✅ Automatically charge the correct price based on date and availability
✅ Create PayPal invoices and send them to participants
✅ Track all registrations in Google Sheets
✅ Update payment status when participants complete payment
✅ Provide a seamless user experience from registration to payment

Good luck with Huascarán 360 MTB 2026! 🚵‍♂️🏔️
