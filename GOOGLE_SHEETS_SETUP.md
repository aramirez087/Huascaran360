# Google Sheets Setup for Huascarán 360 MTB Registration System

This document explains how to set up the Google Sheets required for the n8n workflow.

## Required Sheets

You need to create **ONE Google Spreadsheet** with **TWO sheets** inside it:

### 1. Config Sheet

This sheet tracks the number of Early Bird slots available.

**Sheet Name:** `Config`

**Column Structure:**

| A |
|---|
| early_bird_slots |
| 50 |

**Instructions:**
1. In cell A1, type: `early_bird_slots` (this is the header)
2. In cell A2, type: `50` (or whatever number of early bird slots you want to offer)
3. As registrations come in at the early bird price, the workflow will automatically decrement this number
4. When it reaches 0, new registrations will automatically use Stage 2 pricing ($540)

---

### 2. Registrations Sheet

This sheet logs all race registrations with complete details.

**Sheet Name:** `Registrations`

**Column Structure:**

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| timestamp | invoice_number | invoice_id | name | email | phone | category | price | price_type | payment_status | payment_date |

**Headers (Row 1):**
- `timestamp` - When the registration was created
- `invoice_number` - Unique invoice number (format: H360-[timestamp]-[random])
- `invoice_id` - PayPal invoice ID
- `name` - Participant's full name
- `email` - Participant's email
- `phone` - Participant's phone number
- `category` - Race category (elite, open-masculino, etc.)
- `price` - Amount charged (450, 540, or 600)
- `price_type` - Pricing tier (early_bird, stage_2, or regular)
- `payment_status` - Payment status (pending, paid)
- `payment_date` - When payment was completed (filled by webhook)

**Instructions:**
1. Create the headers in Row 1 exactly as shown above
2. Leave all other rows empty - the workflow will populate them automatically

---

## How to Create the Google Sheet

### Step 1: Create New Spreadsheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Click "+ Blank" to create a new spreadsheet
3. Name it: `Huascaran 360 MTB - Registrations 2026`

### Step 2: Set Up Config Sheet
1. The first sheet will be named "Sheet1" by default
2. Double-click the sheet tab and rename it to: `Config`
3. In cell A1, type: `early_bird_slots`
4. In cell A2, type: `50` (or your desired number)

### Step 3: Set Up Registrations Sheet
1. Click the "+" button at the bottom left to create a new sheet
2. Double-click the new sheet tab and rename it to: `Registrations`
3. Copy these headers into Row 1:
   ```
   timestamp | invoice_number | invoice_id | name | email | phone | category | price | price_type | payment_status | payment_date
   ```
4. Format as a table (optional but recommended):
   - Select the header row
   - Make it bold
   - Add background color
   - Freeze the header row (View > Freeze > 1 row)

### Step 4: Get Your Sheet ID
1. Look at the URL of your Google Sheet. It will look like:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```
2. Copy the `YOUR_SHEET_ID_HERE` part - you'll need this for the n8n workflow

### Step 5: Share with n8n Service Account (if using service account)
1. Click "Share" button in the top right
2. Add the service account email
3. Give it "Editor" permissions

---

## Example Data

### Config Sheet Example:
```
| A                  |
|--------------------|
| early_bird_slots   |
| 50                 |
```

### Registrations Sheet Example (after some registrations):
```
| timestamp              | invoice_number         | invoice_id      | name              | email                  | phone          | category        | price | price_type | payment_status | payment_date           |
|------------------------|------------------------|-----------------|-------------------|------------------------|----------------|-----------------|-------|------------|----------------|------------------------|
| 2025-01-15T10:30:00Z   | H360-1736937000-456    | INV-ABC123      | Juan Pérez        | juan@example.com       | +51974840988   | open-masculino  | 450   | early_bird | paid           | 2025-01-15T11:45:00Z   |
| 2025-01-16T14:20:00Z   | H360-1737038400-789    | INV-DEF456      | Maria García      | maria@example.com      | +50687734888   | open-femenino   | 450   | early_bird | pending        |                        |
```

---

## Monitoring Your Registrations

### Check Early Bird Status
- Open the Config sheet
- Look at cell A2 to see how many Early Bird slots remain
- When it reaches 0, new registrations automatically use Stage 2 pricing

### View All Registrations
- Open the Registrations sheet
- Sort by timestamp to see newest registrations first
- Filter by `payment_status` to see which payments are pending
- Use Google Sheets pivot tables or charts for analytics

### Export for Accounting
- File > Download > Microsoft Excel (.xlsx)
- Or use Google Sheets formulas to create summary reports

---

## Troubleshooting

### Early Bird Counter Not Decreasing
- Check that the n8n workflow has the correct Sheet ID
- Verify the Google Sheets credentials in n8n have "Edit" permission
- Look at the n8n execution logs for errors

### Registration Not Appearing in Sheet
- Check the n8n workflow execution history
- Verify the sheet name is exactly `Registrations` (case-sensitive)
- Ensure all column headers match exactly (case-sensitive)

### Payment Status Not Updating
- Verify the PayPal webhook is configured correctly in your PayPal developer dashboard
- Check that the webhook URL in n8n is active
- Confirm the PayPal webhook node is enabled in n8n

---

## Security Best Practices

1. **Limit Access:** Only share the sheet with people who need to see registration data
2. **Use Service Account:** For production, use a dedicated Google service account for n8n
3. **Regular Backups:** Make weekly copies of your registrations sheet
4. **Protect Sensitive Data:** Consider using Google Sheets' built-in data protection features
5. **Monitor Changes:** Enable version history to track all changes

---

## Next Steps

After setting up your Google Sheets:
1. Copy your Sheet ID
2. Open the n8n workflow JSON file
3. Replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID
4. Set up Google Sheets OAuth2 credentials in n8n
5. Test the workflow with a test registration

---

## Support

For additional help:
- Email: huascaran360mtb@gmail.com
- Check the main README.md for complete setup instructions
