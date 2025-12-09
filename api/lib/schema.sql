-- =============================================
-- Huascarán 360 MTB Database Schema
-- For Supabase PostgreSQL
-- =============================================

-- Config table for managing early bird slots
CREATE TABLE IF NOT EXISTS config (
    id SERIAL PRIMARY KEY,
    key VARCHAR(50) UNIQUE NOT NULL,
    value TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial early bird slots (50 slots available)
INSERT INTO config (key, value) VALUES ('early_bird_slots', '50')
ON CONFLICT (key) DO NOTHING;

-- Registrations table
CREATE TABLE IF NOT EXISTS registrations (
    id SERIAL PRIMARY KEY,
    invoice_number VARCHAR(100) UNIQUE NOT NULL,
    invoice_id VARCHAR(100),
    paypal_url TEXT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    category VARCHAR(100) NOT NULL,
    comments TEXT,
    price DECIMAL(10, 2) NOT NULL,
    price_type VARCHAR(50) NOT NULL,
    payment_status VARCHAR(50) DEFAULT 'pending',
    payment_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_email ON registrations(email);
CREATE INDEX IF NOT EXISTS idx_invoice_id ON registrations(invoice_id);
CREATE INDEX IF NOT EXISTS idx_payment_status ON registrations(payment_status);
CREATE INDEX IF NOT EXISTS idx_created_at ON registrations(created_at DESC);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for registrations table
CREATE TRIGGER update_registrations_updated_at BEFORE UPDATE
    ON registrations FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_config_updated_at BEFORE UPDATE
    ON config FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Contacts table (registration form submissions)
CREATE TABLE IF NOT EXISTS contacts (
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
