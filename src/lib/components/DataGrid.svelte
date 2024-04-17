<script lang="ts">
	import type { Database } from '$lib/supabase-types';

	export let data: {
		pokemon: Database['public']['Tables']['pokemon']['Row'][];
		count: number;
		page: number;
		perPage: number;
	};

	$: totalPages = Math.ceil(data.count / data.perPage);

	function goToPage(newPage: number) {
		if (newPage >= 1 && newPage <= totalPages) {
			window.location.href = `?page=${newPage}`;
		}
	}
</script>

{#if totalPages > 1}
	<div>
		<button on:click={() => goToPage(data.page - 1)} disabled={data.page === 1}> Previous </button>
		<button on:click={() => goToPage(data.page + 1)} disabled={data.page === totalPages}>
			Next
		</button>
	</div>
{/if}

<div class="table-container">
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Number</th>
				<th>Name</th>
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
