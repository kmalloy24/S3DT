<script lang="ts">
	import { ConicGradient } from '@skeletonlabs/skeleton';
	import type { ConicStop } from '@skeletonlabs/skeleton';

	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
	];

	import type { Database } from '$lib/supabase-types';

	export let data: {
		pokemon: Database['public']['Tables']['pokemon']['Row'][];
		count: number;
		page: number;
		perPage: number;
		searchQuery: string;
		sortColumn: string;
		sortOrder: string;
		filters: Record<string, string>;
	};

	let typingTimer: NodeJS.Timeout;
	const doneTypingInterval = 500; // Adjust the delay as needed
	const options = [5, 10, 20, 50, 100];
	let selectedPerPage = data.perPage;
	let loading = false;

	async function search(event: Event) {
		const searchQuery = (event.target as HTMLInputElement).value;
		clearTimeout(typingTimer);
		loading = true;
		typingTimer = setTimeout(() => {
			const url = new URL(window.location.href);
			url.searchParams.set('search', searchQuery);
			url.searchParams.set('page', '1');
			window.location.href = url.toString();
		}, doneTypingInterval);
	}

	function onPerPageChange(event: Event) {
		selectedPerPage = parseInt((event.target as HTMLSelectElement).value);
		loading = true;
		const url = new URL(window.location.href);
		url.searchParams.set('perPage', selectedPerPage.toString());
		url.searchParams.set('page', '1');
		window.location.href = url.toString();
	}

	function onSort(column: string) {
		const url = new URL(window.location.href);
		url.searchParams.set('sortColumn', column);
		url.searchParams.set(
			'sortOrder',
			data.sortOrder === 'asc' && data.sortColumn === column ? 'desc' : 'asc'
		);
		window.location.href = url.toString();
	}

	function onFilter(column: string, value: string) {
		loading = true;
		const url = new URL(window.location.href);
		if (value) {
			url.searchParams.set(`filter_${column}`, value);
		} else {
			url.searchParams.delete(`filter_${column}`);
		}
		window.location.href = url.toString();
	}

	$: totalPages = Math.ceil(data.count / data.perPage);
	$: start = (data.page - 1) * data.perPage + 1;
	$: end = Math.min(start + data.perPage - 1, data.count);

	function goToPage(newPage: number) {
		if (newPage >= 1 && newPage <= totalPages) {
			loading = true;
			const url = new URL(window.location.href);
			url.searchParams.set('page', newPage.toString());
			url.searchParams.set('search', data.searchQuery);
			window.location.href = url.toString();
		}
	}

	$: {
		loading = false;
	}
</script>

<h1 class="flex gap-x-2">
	<a class="h1 font-semibold text-primary-500 hover:underline" href="https://supabase.com/">Supa</a>

	<a class="h1 font-semibold text-secondary-500 hover:underline" href="https://supabase.com/"
		>Svelte</a
	>
	<p
		class="h1 font-semibold bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent box-decoration-clone"
	>
		SSR
	</p>

	<p class="h1 font-semibold">DataGrid</p>
</h1>
<div class="flex flex-col md:flex-row">
	<div class="mb-4 md:mb-0 md:mr-4">
		<input
			type="text"
			class="input"
			value={data.searchQuery}
			on:input={search}
			placeholder="Search by name"
		/>

		<aside class="flex items-center mt-2">
			Show
			<select class="select ml-2" bind:value={selectedPerPage} on:change={onPerPageChange}>
				{#each options as option}
					<option value={option}>
						{option}
					</option>
				{/each}
			</select>
		</aside>

		<div class="mt-2">
			{#if data.count > 0}
				<p>{start} - {end} <strong class="text-primary-500"> / </strong>{data.count}</p>
			{:else}
				<p class="text-error-500">No rows found.</p>
			{/if}
		</div>

		{#if totalPages > 1}
			<div class="gap-x-12 flex mt-2">
				<button
					class="btn variant-outline-primary hover:variant-filled-primary"
					on:click={() => goToPage(data.page - 1)}
					disabled={data.page === 1}
				>
					Previous
				</button>
				<button
					class="btn variant-outline-primary hover:variant-filled-primary"
					on:click={() => goToPage(data.page + 1)}
					disabled={data.page === totalPages}
				>
					Next
				</button>
			</div>
		{/if}

		<div class="mt-2">
			<select
				class="select"
				on:change={(e) => onFilter('name', e.target.value)}
				value={data.filters?.name || ''}
			>
				<option value="">All Names</option>
				{#each [...new Set(data.pokemon.map((p) => p.name))] as name}
					<option value={name}>{name}</option>
				{/each}
			</select>
		</div>
	</div>

	<div class="md:flex-1">
		{#if loading}
			<div class="flex justify-center items-center">
				<ConicGradient stops={conicStops} spin width="w-12">Loading...</ConicGradient>
			</div>
		{:else}
			<div class="table-container w-96">
				<table class="table table-hover">
					<thead>
						<tr>
							<th on:click={() => onSort('number')}>
								Number
								{#if data.sortColumn === 'number'}
									<span class="sort-icon" class:asc={data.sortOrder === 'asc'}></span>
								{/if}
							</th>
							<th on:click={() => onSort('name')}>
								Name
								{#if data.sortColumn === 'name'}
									<span class="sort-icon" class:asc={data.sortOrder === 'asc'}></span>
								{/if}
							</th>
						</tr>
					</thead>
					<tbody>
						{#each data.pokemon as pokemon}
							<tr>
								<td>{pokemon.number}</td>
								<td>{pokemon.name}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</div>
</div>

<style>
	.sort-icon {
		display: inline-block;
		width: 0;
		height: 0;
		margin-left: 5px;
		vertical-align: middle;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-bottom: 4px solid currentColor;
		transition: transform 0.2s;
	}

	.sort-icon.asc {
		transform: rotate(180deg);
	}

	th {
		cursor: pointer;
		user-select: none;
	}
</style>
