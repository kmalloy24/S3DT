import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabaseClient";

export const load: PageServerLoad = async ({ url }) => {
  const page = parseInt(url.searchParams.get("page") || "1");
  const perPage = 10;
  const offset = (page - 1) * perPage;

  const { data, count } = await supabase
    .from("pokemon")
    .select("*", { count: "exact" })
    .range(offset, offset + perPage - 1);

  return {
    pokemon: data ?? [],
    count: count ?? 0,
    page,
    perPage,
  };
};
