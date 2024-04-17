import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabaseClient";

export const load: PageServerLoad = async ({ url }) => {
  const page = parseInt(url.searchParams.get("page") || "1");
  const perPage = parseInt(url.searchParams.get("perPage") || "10");
  const offset = (page - 1) * perPage;
  const searchQuery = url.searchParams.get("search") || "";
  const sortColumn = url.searchParams.get("sortColumn") || "number";
  const sortOrder = url.searchParams.get("sortOrder") || "asc";
  const filters: Record<string, string> = {};
  url.searchParams.forEach((value, key) => {
    if (key.startsWith("filter_")) {
      const column = key.replace("filter_", "");
      filters[column] = value;
    }
  });

  const query = supabase
    .from("pokemon")
    .select("*", { count: "exact" })
    .range(offset, offset + perPage - 1);

  if (searchQuery) {
    query.ilike("name", `%${searchQuery}%`);
  }

  query.order(sortColumn, { ascending: sortOrder === "asc" });

  Object.entries(filters).forEach(([column, value]) => {
    query.ilike(column, `%${value}%`);
  });

  const { data, count } = await query;

  return {
    pokemon: data ?? [],
    count: count ?? 0,
    page,
    perPage,
    searchQuery,
    sortColumn,
    sortOrder,
    filters,
  };
};
