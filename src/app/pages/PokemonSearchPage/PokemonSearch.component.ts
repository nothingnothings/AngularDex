import { Component, Input, OnInit } from '@angular/core';
import { SimplePokemon } from 'src/app/types/simplePokemon.model';

@Component({
  templateUrl: './PokemonSearch.component.html',
  selector: 'app-pokemon-search-page',
})
export class PokemonSearchPageComponent implements OnInit {
  @Input() pokemons!: SimplePokemon[];
  @Input() isLoading!: boolean;
  @Input() isError!: boolean;
  @Input() errorMessage!: string;

  constructor(public filteredPokemons: SimplePokemon[] = []) {}

  ngOnInit(): void {
    this.filteredPokemons = this.pokemons;
  }

  inputChangedHandler(event: Event) {
    const searchedPokemon = (event.target as HTMLInputElement).value;
    this.filteredPokemons = this.filteredPokemons.filter(
      (pokemon: SimplePokemon) => {
        return pokemon.name
          .toUpperCase()
          .includes(searchedPokemon.toUpperCase());
      }
    );
  }
}
