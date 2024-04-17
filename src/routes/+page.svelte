<script lang="ts">
	import DataGrid from '$lib/components/DataGrid.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
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
				pokemon: data.pokemon,
				count: data.count,
				page: data.page,
				perPage: data.perPage
			}}
		/>
	</div>
</div>
