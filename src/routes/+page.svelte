<script lang="ts">
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
	</div>
</div>
