import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ivpzvycewurruqvawkbp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2cHp2eWNld3VycnVxdmF3a2JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyOTc3OTYsImV4cCI6MjA2OTg3Mzc5Nn0.A_3NSsB12VqaqV_Woevwur_xHHSOQUcQXjhvHLIHQSE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
