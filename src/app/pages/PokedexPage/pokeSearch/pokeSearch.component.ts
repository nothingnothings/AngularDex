import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PokedexService } from 'src/services/pokedex.service';

@Component({
  templateUrl: './pokeSearch.component.html',
  selector: 'app-poke-search',
})
export class PokeSearchComponent implements OnInit {
  // @Input() inputChanged!: VoidFunction;

  @Output()
  change = new EventEmitter();
  searchedPokemon = '';

  constructor(private pokedex: PokedexService) {}

  ngOnInit(): void {}

  inputChanged(event: any) {
    console.log('INPUT RECEIVED', event.target.value);

    // elementRef.subscribe((event: any) => {
    //   console.log(event);
    // });

    const filter = event?.target.value;

    // this.searchedPokemon = elementRef.target.value;
    // this.change.emit(this.searchedPokemon);

    this.pokedex.filterPokemon(filter);
  }
}
