/*
  # Create domestic help bookings table

  1. New Tables
    - `domestic_help_bookings`
      - Basic info: id, created_at, house_size, floors, has_dogs
      - Service details: selected_services, work_shift, start_date, notes
      - Customer info: name, phone, email, address, city, pincode
      - Additional services: bathroom_details, dusting_details, dishwashing_details
      - Preferences: has_religious_preference
      - Financial: amount, status

  2. Security
    - Enable RLS
    - Add policies for public access
*/

-- Create the table
CREATE TABLE domestic_help_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  
  -- Basic booking info
  house_size text NOT NULL,
  floors text NOT NULL,
  has_dogs boolean NOT NULL DEFAULT false,
  
  -- Services
  selected_services text[] NOT NULL,
  work_shift text NOT NULL,
  start_date date NOT NULL,
  notes text,
  
  -- Customer details
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  customer_email text NOT NULL,
  customer_address text NOT NULL,
  customer_city text NOT NULL,
  customer_pincode text NOT NULL,
  
  
  -- Additional services
  bathroom_details jsonb,
  dusting_details jsonb,
  dishwashing_details jsonb,
  
  -- Preferences
  has_religious_preference boolean DEFAULT false,
  
  -- Financial
  amount numeric NOT NULL,
  status text DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE domestic_help_bookings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public can insert domestic help bookings"
  ON domestic_help_bookings
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Public can read domestic help bookings"
  ON domestic_help_bookings
  FOR SELECT
  TO public
  USING (true);