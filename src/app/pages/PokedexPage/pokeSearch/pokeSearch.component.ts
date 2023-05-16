import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  templateUrl: './pokeSearch.component.html',
  selector: 'app-poke-search',
})
export class PokeSearchComponent implements OnInit {
  @Output()
  change = new EventEmitter();
  searchedPokemon = '';

  constructor(private pokedex: PokedexService) {}

  ngOnInit(): void {}

  inputChanged(event: any) {
    const filter = event?.target.value;

    this.pokedex.filterPokemon(filter);
  }
}
