import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("https://qivuscqelwsamcuacsmm.supabase.co" 
, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpdnVzY3FlbHdzYW1jdWFjc21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwODI4MDgsImV4cCI6MjAzMzY1ODgwOH0.40TLCwN8V28_BUY7gBCk6LdqWE_ZT_meJcy47lM1SQo")