import { Component, Input, OnInit } from '@angular/core';
import { SimplePokemon } from 'src/app/types/simplePokemon.model';

@Component({
  templateUrl: './pokedex.component.html',
  selector: 'app-pokedex-page',
})
export class PokedexPageComponent implements OnInit {
  @Input() pokemons!: SimplePokemon[];
  @Input() wrapperMessage!: string;
  @Input() isLoading!: boolean;
  @Input() isSearch!: boolean;
  @Input() isDetails!: boolean;
  @Input() errorMessage!: string;

  constructor() {}

  ngOnInit(): void {}
}
