// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://inalddeabgswlthfonuu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluYWxkZGVhYmdzd2x0aGZvbnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNTA3MDIsImV4cCI6MjA2NTgyNjcwMn0.2Ko4r61-Dof_V8UfmdI4cVi0GJ4JTI4MD2Dt4ywEuVM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);