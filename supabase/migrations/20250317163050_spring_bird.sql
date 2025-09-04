/*
  # Create dishwashing bookings table with RLS policies

  1. New Tables
    - `dishwashing_bookings`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `people_count` (text)
      - `frequency` (text)
      - `work_shift` (text)
      - `start_date` (date)
      - `notes` (text, nullable)
      - `customer_name` (text)
      - `customer_phone` (text)
      - `customer_email` (text)
      - `customer_address` (text)
      - `customer_city` (text)
      - `customer_pincode` (text)
      - `amount` (numeric)
      - `status` (text, default: 'pending')

  2. Security
    - Enable RLS on `dishwashing_bookings` table
    - Add policies for public access to insert and read bookings
*/

-- Drop existing table if it exists
DROP TABLE IF EXISTS dishwashing_bookings;

-- Create the table
CREATE TABLE dishwashing_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  people_count text NOT NULL,
  frequency text NOT NULL,
  work_shift text NOT NULL,
  start_date date NOT NULL,
  notes text,
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  customer_email text NOT NULL,
  customer_address text NOT NULL,
  customer_city text NOT NULL,
  customer_pincode text NOT NULL,
  amount numeric NOT NULL,
  status text DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE dishwashing_bookings ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can insert bookings" ON dishwashing_bookings;
DROP POLICY IF EXISTS "Public can read bookings" ON dishwashing_bookings;

-- Create new policies
CREATE POLICY "Public can insert bookings"
  ON dishwashing_bookings
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Public can read bookings"
  ON dishwashing_bookings
  FOR SELECT
  TO public
  USING (true);