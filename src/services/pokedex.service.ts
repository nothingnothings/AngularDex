import { Injectable } from '@angular/core';
import axios from 'axios';

import { map, Subject, tap } from 'rxjs';
import { SimplePokemon } from 'src/app/types/simplePokemon.model';

@Injectable()
export class PokedexService {
  private pokemons: SimplePokemon[] = [];

  constructor() {}

  getPokemons() {
    return [...this.pokemons];
  }

  async loadPokemons() {
    // this.isLoading = true;
    try {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=800'
      );

      const alteredPokemons = response.data.results.map(
        (pokemon: SimplePokemon, index: number) => {
          return {
            id: index + 1,
            url: pokemon.url,
            name: pokemon.name,
          };
        }
      );

      // this.pokemons = alteredPokemons;
      this.pokemons = alteredPokemons;
      return alteredPokemons;
      // this.isLoading = false;
    } catch (error: unknown | Error) {
      // this.isError = true;
      // if (error instanceof AxiosError) {
      //   this.errorMessage = error.message;
      // }
    }
  }
}
