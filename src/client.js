import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dbnnwfchfsbysqmubfbr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRibm53ZmNoZnNieXNxbXViZmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwODM5MTEsImV4cCI6MjA3MTY1OTkxMX0.eysFMvQt8kMBgrR_B-DzQbKX8FTXSdDnKjeya6KRmiE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
