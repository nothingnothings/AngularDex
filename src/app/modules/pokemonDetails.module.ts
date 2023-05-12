import { NgModule, OnInit } from '@angular/core';
import { PokedexWrapperComponent } from '../pages/PokedexPage/pokedexWrapper/pokedexWrapper.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonDetailsCardComponent } from '../pages/PokemonDetailsPage/pokemonDetailsCard/pokemonDetailsCard.component';
import { SpinnerComponent } from '../components/UI/spinner/spinner.component';

@NgModule({
  declarations: [
    PokemonDetailsCardComponent,
    PokedexWrapperComponent,
    SpinnerComponent,
  ],
  exports: [PokemonDetailsCardComponent],
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
