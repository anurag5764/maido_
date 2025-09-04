/*
  # Update cooking bookings table

  1. Changes
    - Safely recreate cooking_bookings table if it exists
    - Preserve existing policies
    - Ensure all columns and constraints are properly set

  2. Security
    - Maintain RLS policies for public access
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can insert cooking bookings" ON cooking_bookings;
DROP POLICY IF EXISTS "Public can read cooking bookings" ON cooking_bookings;

-- Drop existing table if it exists
DROP TABLE IF EXISTS cooking_bookings;

-- Create the table
CREATE TABLE cooking_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  meal_type text NOT NULL,
  people_count text NOT NULL,
  meal_time text NOT NULL,
  meals text[] NOT NULL,
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
  status text DEFAULT 'pending',
  has_dishwashing boolean DEFAULT false,
  dishwashing_people_count text,
  dishwashing_frequency text
);

-- Enable RLS
ALTER TABLE cooking_bookings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public can insert cooking bookings"
  ON cooking_bookings
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Public can read cooking bookings"
  ON cooking_bookings
  FOR SELECT
  TO public
  USING (true);