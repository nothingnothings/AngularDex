import { NgModule, OnInit } from '@angular/core';
import { PokedexComponent } from '../pages/PokedexPage/pokedex/pokedex.component';
import { CardComponent } from '../pages/PokedexPage/pokedex/card/card.component';
import { PokedexWrapperComponent } from '../pages/PokedexPage/pokedexWrapper/pokedexWrapper.component';
import { PokeSearchComponent } from '../pages/PokedexPage/pokeSearch/pokeSearch.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PokedexComponent,
    CardComponent,
    PokedexWrapperComponent,
    PokeSearchComponent,
  ],
  exports: [PokedexComponent],
  imports: [CommonModule, RouterModule],
})
export class PokedexPageModule implements OnInit {
  // @Input() pokemons!: SimplePokemon[];

  // @Input() wrapperMessage!: string;
  // @Input() isLoading!: boolean;
  // @Input() isSearch!: boolean;
  // @Input() isDetails!: boolean;
  // @Input() isError!: boolean;
  // @Input() errorMessage!: string;

  constructor() {}

  ngOnInit(): void {}
}
