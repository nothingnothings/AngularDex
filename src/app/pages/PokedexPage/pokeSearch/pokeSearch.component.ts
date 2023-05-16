import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  templateUrl: './pokeSearch.component.html',
  selector: 'app-poke-search',
})
export class PokeSearchComponent implements OnInit {
  // @Input() inputChanged!: VoidFunction;

  @Output()
  change = new EventEmitter();
  searchedPokemon = '';

  constructor() {}

  ngOnInit(): void {}

  inputChanged(elementRef: any) {
    console.log('INPUT RECEIVED', elementRef);

    // elementRef.subscribe((event: any) => {
    //   console.log(event);
    // });
    console.log(elementRef.target.value);

    this.searchedPokemon = elementRef.target.value;
    this.change.emit(this.searchedPokemon);
  }
}
