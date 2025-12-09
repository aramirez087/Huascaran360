-- Run this if you already created the contacts table with the previous schema
-- Otherwise, you can just drop the table and recreate it with the new schema in schema.sql

ALTER TABLE contacts ADD COLUMN IF NOT EXISTS id_document VARCHAR(50);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS birth_date DATE;
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS gender VARCHAR(20);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS nationality VARCHAR(100);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS address TEXT;
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS team VARCHAR(100);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS plate_number VARCHAR(50);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS jersey_size VARCHAR(10);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS emergency_contact_name VARCHAR(255);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS emergency_contact_phone VARCHAR(50);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS blood_type VARCHAR(10);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS image_auth BOOLEAN DEFAULT FALSE;
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS social_media TEXT;
