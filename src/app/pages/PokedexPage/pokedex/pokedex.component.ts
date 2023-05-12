import { Component, Input, OnInit } from '@angular/core';
import axios, { AxiosError } from 'axios';
import { SimplePokemon } from 'src/app/types/simplePokemon.model';

@Component({
  templateUrl: './pokedex.component.html',
  selector: 'app-pokedex',
})
export class PokedexComponent implements OnInit {
  pokemons: SimplePokemon[] = [];
  isError!: boolean;
  errorMessage!: string;

  @Input() isLoading!: boolean;
  @Input() wrapperMessage!: string;
  @Input() isDetails!: boolean;
  @Input() isSearch!: boolean;
  @Input() inputChanged!: VoidFunction;

  constructor() {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  async loadPokemon() {
    console.log('FETCHED POKEMON');
    this.isLoading = true;
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

      this.pokemons = alteredPokemons;
      this.isLoading = false;
    } catch (error: unknown | Error) {
      console.log(error);
      this.isError = true;
      if (error instanceof AxiosError) {
        this.errorMessage = error.message;
      }
    }
  }
}
