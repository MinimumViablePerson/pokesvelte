const baseUrl = 'https://pokeapi.co/api/v2'
const pokemonsUrl = baseUrl + '/pokemon'

const get = url => fetch(url)
  .then(resp => resp.json())

const getPokemons = () => get(pokemonsUrl)

const getPokemon = id => get(pokemonsUrl + `/${id}`)

export default { getPokemon, getPokemons }
