<script lang="ts">
	export let data;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
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

		<!-- Responsive Container (recommended) -->
		<div class="table-container">
			<!-- Native Table Element -->
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Type 1</th>
						<th>Type 2</th>
					</tr>
				</thead>
				<tbody>
					{#each data.pokemon as pokemon}
						<tr>
							<td>{pokemon.Name}</td>
							<td>{pokemon.Name}</td>
							<td>{pokemon.Name}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
