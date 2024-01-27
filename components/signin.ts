import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl) throw new Error('Supabase URL not found.')
if (!supabaseAnonKey) throw new Error('Supabase Anon key not found.')

const supabase = createClient(supabaseUrl, supabaseAnonKey)


export async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        // options: {
        //     // redirectTo: getURL() // function to get your URL
        // }
    })
}

export async function signInWithTwitter() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'twitter',
    })
  }
  