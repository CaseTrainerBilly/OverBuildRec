/*
  # OVERBUILD Recruitment Database Schema

  1. New Tables
    - `companies`
      - `id` (uuid, primary key)
      - `name` (text)
      - `logo_url` (text, nullable)
      - `description` (text, nullable)
      - `created_at` (timestamptz)
    
    - `jobs`
      - `id` (uuid, primary key)
      - `company_id` (uuid, foreign key to companies)
      - `title` (text)
      - `location` (text)
      - `job_type` (text) - Full-time, Part-time, Contract
      - `salary_min` (integer, nullable)
      - `salary_max` (integer, nullable)
      - `industry` (text) - Construction, Engineering, Infrastructure
      - `description` (text)
      - `requirements` (text, nullable)
      - `is_featured` (boolean, default false)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, nullable)
      - `message` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to companies and jobs
    - Add policy for inserting contact submissions
*/

-- Create companies table
CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  title text NOT NULL,
  location text NOT NULL,
  job_type text NOT NULL DEFAULT 'Full-time',
  salary_min integer,
  salary_max integer,
  industry text NOT NULL DEFAULT 'Construction',
  description text NOT NULL,
  requirements text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Companies policies
CREATE POLICY "Anyone can view companies"
  ON companies FOR SELECT
  TO public
  USING (true);

-- Jobs policies
CREATE POLICY "Anyone can view jobs"
  ON jobs FOR SELECT
  TO public
  USING (true);

-- Contact submissions policies
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  TO public
  WITH CHECK (true);

-- Insert sample companies
INSERT INTO companies (name, description) VALUES
  ('BuildTech Solutions', 'Leading construction management firm'),
  ('Infrastructure Group', 'Major infrastructure development company'),
  ('Engineering Partners', 'Civil and structural engineering specialists'),
  ('Metro Construction', 'Urban development and construction'),
  ('Green Build Co', 'Sustainable construction solutions')
ON CONFLICT DO NOTHING;

-- Insert sample jobs with explicit column references
INSERT INTO jobs (company_id, title, location, job_type, salary_min, salary_max, industry, description, is_featured)
SELECT 
  c.id,
  job_data.title,
  job_data.location,
  job_data.job_type,
  job_data.salary_min,
  job_data.salary_max,
  job_data.industry,
  job_data.description,
  job_data.is_featured
FROM companies c
CROSS JOIN (VALUES
  ('Senior Site Manager', 'London', 'Full-time', 60000, 80000, 'Construction', 'We are seeking an experienced Site Manager to oversee major construction projects across London. The ideal candidate will have 5+ years of experience in commercial construction.', true),
  ('Civil Engineer', 'Manchester', 'Full-time', 45000, 60000, 'Engineering', 'Join our dynamic engineering team working on infrastructure projects. Degree in Civil Engineering required with minimum 3 years experience.', true),
  ('Project Coordinator', 'Birmingham', 'Contract', 35000, 45000, 'Construction', 'Coordinate multiple construction projects and liaise with stakeholders. Strong organizational skills essential.', false),
  ('Structural Engineer', 'Leeds', 'Full-time', 50000, 70000, 'Engineering', 'Design and analyze structural elements for major infrastructure projects. Chartered Engineer status preferred.', true),
  ('Health & Safety Manager', 'Bristol', 'Full-time', 55000, 65000, 'Construction', 'Ensure site compliance with health and safety regulations. NEBOSH certification required.', false)
) AS job_data(title, location, job_type, salary_min, salary_max, industry, description, is_featured)
LIMIT 5;