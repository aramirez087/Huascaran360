-- Run this migration in Supabase SQL Editor
-- This creates the contacts table with ALL required fields

DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    -- Personal Data
    name VARCHAR(255) NOT NULL,
    id_document VARCHAR(50),
    birth_date DATE,
    gender VARCHAR(20),
    nationality VARCHAR(100),
    address TEXT,
    phone VARCHAR(50),
    email VARCHAR(255) NOT NULL,
    -- Race Data
    team VARCHAR(100),
    plate_number VARCHAR(50),
    jersey_size VARCHAR(10),
    -- Emergency
    emergency_contact_name VARCHAR(255),
    emergency_contact_phone VARCHAR(50),
    blood_type VARCHAR(10),
    -- Other
    image_auth BOOLEAN DEFAULT FALSE,
    social_media TEXT,
    message TEXT,
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
