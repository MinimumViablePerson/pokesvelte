<script>
  import { Link } from 'svelte-routing'

  export let pokemon
  export let selectPokemon
  
  const getPokemonId = url => parseInt(url.match(/(\d+)\/$/)[1])
  const id = getPokemonId(pokemon.url)
</script>

<div class="item" on:click={() => selectPokemon(id)}>
  <img
    class="ui avatar image"
    src="https://orig00.deviantart.net/7926/f/2008/004/1/3/pokeball_by_pokemar.png"
    alt={pokemon.name}
  />
  <div class="content">
    <div class="header">{pokemon.name}</div>
  </div>
</div>
