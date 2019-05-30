<script>
	import { fly } from 'svelte/transition'
	import PokemonList from './components/PokemonList.svelte'
	import PokemonDetails from './components/PokemonDetails.svelte'

	let url = ''
	let id = null

	const selectPokemon = pokemonId => {
		id = pokemonId
	}
</script>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	.app {
		display: grid;
		grid-template-columns: 1fr 3fr;
		height: 100vh;
		width: 100vw;
	}
</style>

<div class='app'>
	<PokemonList {selectPokemon} />
	{#if id}
		<PokemonDetails {id} />
	{/if}
</div>