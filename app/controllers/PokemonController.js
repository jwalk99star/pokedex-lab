import { AppState } from "../AppState.js"
import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawPokemon() {
  const pokemon = AppState.pokemon
  console.log('pokes', pokemon);
  let template = ''

  pokemon.forEach(poke => {
    template += `
    <li onclick"app.PokemonController.getPokeDetails('${poke.url}')">${poke.name}</li>
    `
  })
  setHTML('pokeList', template)
}

export class PokemonController {
  constructor() {
    console.log('pokemon controller loaded')
    this.getPokemon()

    AppState.on('pokemon', _drawPokemon)
  }

  async getPokemon() {
    try {
      await pokemonService.getPokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }



}
