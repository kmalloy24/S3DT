import type { Actions, PageServerLoad } from "./$types";
import { supabase } from "$lib/supabaseClient";

export const load: PageServerLoad = async ({ url }) => {
  const page = parseInt(url.searchParams.get("page") || "1");
  const perPage = 10;
  const offset = (page - 1) * perPage;

  const { data: pokemonData, count: pokemonCount, error: pokemonError } =
    await supabase
      .from("pokemon")
      .select("*", { count: "exact" })
      .range(offset, offset + perPage - 1);

  if (pokemonError) {
    console.error("Error fetching pokemon data:", pokemonError);
  }

  return {
    pokemon: pokemonData ?? [],
    count: pokemonCount ?? 0,
    page,
    perPage,
  };
};

export const actions: Actions = {
  subscribeToChanges: async ({ request }) => {
    const { searchParams } = new URL(request.url);
    const clientId = searchParams.get("clientId");

    if (!clientId) {
      return new Response("Client ID is required", { status: 400 });
    }

    const channel = supabase
      .channel(`pokemon_changes_${clientId}`)
      .on("postgres_changes", {
        event: "*",
        schema: "public",
        table: "pokemon",
      }, (payload) => {
        const eventData = JSON.stringify(payload);
        return new Response(eventData, {
          headers: {
            "Content-Type": "text/event-stream",
            Connection: "keep-alive",
            "Cache-Control": "no-cache",
          },
        });
      });

    await channel.subscribe();

    return new Response(null, {
      headers: {
        "Content-Type": "text/event-stream",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
      },
    });
  },
};
