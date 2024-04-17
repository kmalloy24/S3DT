<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import DataGrid from '$lib/components/DataGrid.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let pokemonData = data.pokemon;
	let count = data.count;

	let eventSource: EventSource;

	onMount(() => {
		const clientId = Date.now().toString();
		eventSource = new EventSource(`?/subscribeToChanges&clientId=${clientId}`);

		eventSource.onmessage = (event) => {
			const payload = JSON.parse(event.data);
			if (payload.eventType === 'INSERT') {
				pokemonData = [...pokemonData, payload.new];
				count++;
			} else if (payload.eventType === 'DELETE') {
				pokemonData = pokemonData.filter((pokemon) => pokemon.id !== payload.old.id);
				count--;
			} else if (payload.eventType === 'UPDATE') {
				pokemonData = pokemonData.map((pokemon) =>
					pokemon.id === payload.new.id ? payload.new : pokemon
				);
			}
		};
	});

	onDestroy(() => {
		if (eventSource) {
			eventSource.close();
		}
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center mt-8">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h1 class="flex gap-x-2">
			<a class="h1 font-semibold text-primary-500 hover:underline" href="https://supabase.com/"
				>Supa</a
			>
			<a class="h1 font-semibold text-pink-500 hover:underline" href="https://supabase.com/"
				>Simple</a
			>
			<a class="h1 font-semibold text-secondary-500 hover:underline" href="https://supabase.com/"
				>Svelte</a
			>
			<p class="h1 font-semibold">DataTable</p>
		</h1>
		<DataGrid
			data={{
				pokemon: pokemonData,
				count: count,
				page: data.page,
				perPage: data.perPage
			}}
		/>
	</div>
</div>
