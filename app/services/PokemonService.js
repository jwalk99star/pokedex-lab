import { AppState } from "../AppState.js";
import { pokemonApi } from "./AxiosService.js"

class PokemonService {
  async getPokemon() {
    const res = await pokemonApi.get('/pokemon')

    console.log('got pokemon api', res.data);

    AppState.pokemon = res.data.results
  }

}




export const pokemonService = new PokemonService