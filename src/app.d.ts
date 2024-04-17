import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "$lib/supabase-types.ts";

declare namespace App {
  interface Locals {
    supabase: SupabaseClient<Database>;
  }
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}
