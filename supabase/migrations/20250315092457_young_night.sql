/*
  # Create dishwashing bookings table

  1. New Tables
    - `dishwashing_bookings`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `people_count` (text)
      - `frequency` (text)
      - `work_shift` (text)
      - `start_date` (date)
      - `notes` (text)
      - `customer_name` (text)
      - `customer_phone` (text)
      - `customer_email` (text)
      - `customer_address` (text)
      - `customer_city` (text)
      - `customer_pincode` (text)
      - `amount` (numeric)
      - `status` (text)

  2. Security
    - Enable RLS on `dishwashing_bookings` table
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS dishwashing_bookings (
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

ALTER TABLE dishwashing_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own bookings"
  ON dishwashing_bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert bookings"
  ON dishwashing_bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (true);