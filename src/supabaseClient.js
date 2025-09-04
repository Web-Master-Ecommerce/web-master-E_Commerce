import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://brdiqkwnybvvzjzpxmye.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyZGlxa3dueWJ2dnpqenB4bXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxNTIzNjcsImV4cCI6MjA3MTcyODM2N30.61dDfmhN22mTR19fO4ROnpDroy9H0XgCWzerPK3adEg';
export const supabase = createClient(supabaseUrl, supabaseKey);

