// import { createClient } from '@supabase/supabase-js'
// import {SUPABASE_KEY} from '@env';

// const supabaseUrl = 'https://pajellhhkakwbnypmdhi.supabase.co';
// const supabase = createClient(supabaseUrl, SUPABASE_KEY);

// export default supabase;

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pajellhhkakwbnypmdhi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhamVsbGhoa2Frd2JueXBtZGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjg3NjksImV4cCI6MjA1Mjk0NDc2OX0.JTeubmKtBHXKW5ylwcZoqbgkIp2LXJkPXdlTShRHXlI'; // Replace with your actual anon key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
