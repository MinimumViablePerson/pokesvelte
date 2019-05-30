<script>
  import { fly } from 'svelte/transition'
  import pokemonService from '../services/pokemons'
  
  export let id

  const getTypes = pokemon =>
    pokemon.types.map(each => each.type.name).join(', ')

  const randomFly = () => ({
    x: (Math.random() - 0.5) * 1000 + 100,
    y: (Math.random() - 0.5) * 1000 + 100,
  })
</script>

<style>
  .pokemon-details {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

{#await pokemonService.getPokemon(id)}
  <h2>Loading...</h2>
{:then pokemon}
  <div class='pokemon-details'>
    <div in:fly={randomFly()} class="ui card">
      <a class="image" href="#">
        <img src="{pokemon.sprites.front_default}" alt=''>
      </a>
      <div class="content">
        <a class="header" href="#">{pokemon.name}</a>
        <div class="meta">
          <a>{getTypes(pokemon)}</a>
        </div>
      </div>
    </div>
  </div>
{:catch}
  <h2>Oops... something didn't work.</h2>
{/await}
