import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Clinic = {
  id: string;
  name: string;
  prefecture: string;
  city: string;
  address: string;
  phone: string;
  website: string | null;
  specialties: string[];
  hours: string | null;
  closed_days: string | null;
  rating: number;
  review_count: number;
  lat: number | null;
  lng: number | null;
  created_at: string;
};

export type Review = {
  id: string;
  clinic_id: string;
  author_name: string;
  rating: number;
  title: string;
  body: string;
  visit_date: string | null;
  created_at: string;
};
