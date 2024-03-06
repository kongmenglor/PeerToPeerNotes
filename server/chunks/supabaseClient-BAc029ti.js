import { createClient } from '@supabase/supabase-js';

const supabaseURL = "https://expivrcjqagopbmwoyvv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cGl2cmNqcWFnb3BibXdveXZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5OTQ4MzcsImV4cCI6MjAyNDU3MDgzN30.RIOOTowzp913ZV0E857_7Xi5eYuDjqZ7uqr_SnjH_pQ";
const supabase = createClient(supabaseURL, supabaseKey);

export { supabase as s };
//# sourceMappingURL=supabaseClient-BAc029ti.js.map
