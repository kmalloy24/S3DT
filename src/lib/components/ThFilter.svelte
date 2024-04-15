<script lang="ts">
	export let value: any;
	export let dataType: 'string' | 'number' = 'string';
</script>

<th>
	{#if dataType === 'string'}
		<input class="input text-sm w-full" type="text" placeholder="Filter" bind:value on:input />
	{:else}
		<input class="input text-sm w-full" type="number" placeholder="Filter" bind:value on:input />
	{/if}
</th>
