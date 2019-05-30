<script>
  import PokemonListItem from './PokemonListItem.svelte'
  import pokemonService from '../services/pokemons'

  export let selectPokemon
</script>

<style>
  .list {
    overflow: scroll;
  }
</style>

<div class="ui middle aligned selection list">
  {#await pokemonService.getPokemons()}
    <div class="item">
      <div class="content">
        <div class="header">Loading...</div>
      </div>
    </div>
  {:then data}
    {#each data.results as pokemon}
      <PokemonListItem {pokemon} {selectPokemon} />
    {/each}
  {:catch}
    <p>Something went wrong...</p>
  {/await}
</div>
