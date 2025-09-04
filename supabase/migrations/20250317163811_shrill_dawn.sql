/*
  # Create cooking bookings table

  1. New Tables
    - `cooking_bookings`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `meal_type` (text)
      - `people_count` (text)
      - `meal_time` (text)
      - `meals` (text[])
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
      - `has_dishwashing` (boolean)
      - `dishwashing_people_count` (text)
      - `dishwashing_frequency` (text)

  2. Security
    - Enable RLS on `cooking_bookings` table
    - Add policies for public access to insert and read bookings
*/

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