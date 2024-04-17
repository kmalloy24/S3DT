<script lang="ts">
	import DataGrid from '$lib/components/DataGrid.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	let searchQuery = data.searchQuery;

	function search() {
		const url = new URL(window.location.href);
		url.searchParams.set('search', searchQuery);
		url.searchParams.set('page', '1');
		window.location.href = url.toString();
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center mt-8">
	<div class="space-y-10 text-center flex flex-col items-center">
		<DataGrid
			data={{
				pokemon: data.pokemon,
				count: data.count,
				page: data.page,
				perPage: data.perPage,
				searchQuery: data.searchQuery,
				sortColumn: data.sortColumn,
				sortOrder: data.sortOrder,
				filters: data.filters
			}}
		/>
	</div>
</div>
