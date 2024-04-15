import type { PageServerLoad } from "./$types";

import { supabase } from "$lib/supabaseClient";

export const load: PageServerLoad = async () => {
  const { data } = await supabase.from("pokemon").select();
  return {
    pokemon: data ?? [],
  };
};
