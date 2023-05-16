import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Subject, tap } from 'rxjs';
import { SimplePokemon } from 'src/app/types/simplePokemon.model';

@Injectable()
export class PokedexService {
  private pokemons: SimplePokemon[] = [];
  private allPokemons: SimplePokemon[] = [];
  private isLoading = false;

  constructor(private http: HttpClient) {}

  getPokemons() {
    return [...this.pokemons];
  }

  loadPokemons() {
    this.isLoading = true;

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
          this.allPokemons = pokemons;
          this.pokemons = pokemons;
          this.pokedexChanged.next([...pokemons]);
          this.isLoading = false;
        })
      );
  }

  pokedexChanged = new Subject<SimplePokemon[]>();

  loading = new Subject<boolean>();

  loadState() {
    return this.loading.next(this.isLoading);
  }

  filterPokemon(filter: string) {
    const filteredPokemons = this.pokemons.filter((pokemon: SimplePokemon) => {
      return pokemon.name.toUpperCase().includes(filter.toUpperCase());
    });

    this.pokedexChanged.next([...filteredPokemons]);
  }

  resetPokemon() {
    this.pokedexChanged.next([...this.allPokemons]);
  }
}
