import { Injectable } from '@angular/core';
import axios from 'axios';

import { HttpClient } from '@angular/common/http';
import { map, Subject, tap } from 'rxjs';
import { SimplePokemon } from 'src/app/types/simplePokemon.model';

@Injectable()
export class PokedexService {
  private pokemons: SimplePokemon[] = [];
  private allPokemons: SimplePokemon[] = [];

  constructor(private http: HttpClient) {}

  getPokemons() {
    return [...this.pokemons];
  }

  loadPokemons() {
    // this.isLoading = true;

    return this.http
      .get<[SimplePokemon]>('https://pokeapi.co/api/v2/pokemon?limit=800')
      .pipe(
        map((data: any) => {
          const transformedPokemonArray: SimplePokemon[] = [];
          let index = 0;

          for (const pokemon in data.results) {
            transformedPokemonArray.push({
              ...data.results[pokemon],
              id: index + 1,
            });
            index++;
          }

          return transformedPokemonArray;
        }),

        tap((pokemons) => {
          console.log('TEST', pokemons);
          this.allPokemons = pokemons;
          this.pokemons = pokemons;
          this.pokedexChanged.next([...pokemons]);
        })
      );

    // this.pokemons = alteredPokemons;
    // this.pokemons = alteredPokemons;
    // this.isLoading = false;

    // this.isError = true;
    // if (error instanceof AxiosError) {
    //   this.errorMessage = error.message;
    // }
  }

  pokedexChanged = new Subject<SimplePokemon[]>();

  filterPokemon(filter: string) {
    console.log(filter);
    const filteredPokemons = this.pokemons.filter((pokemon: SimplePokemon) => {
      return pokemon.name.toUpperCase().includes(filter.toUpperCase());
    });

    this.pokedexChanged.next([...filteredPokemons]);
  }

  resetPokemon() {
    this.pokedexChanged.next([...this.allPokemons]);
  }
}
