import { Input, NgModule, OnInit } from '@angular/core';
import { SimplePokemon } from 'src/app/types/simplePokemon.model';
import { PokedexComponent } from './pokedex/pokedex.component';
import { CardComponent } from './pokedex/card/card.component';
import { PokedexWrapperComponent } from './pokedexWrapper/pokedexWrapper.component';
import { PokeSearchComponent } from './pokeSearch/pokeSearch.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PokedexComponent,
    CardComponent,
    PokedexWrapperComponent,
    PokeSearchComponent,
  ],
  exports: [PokedexComponent],
  imports: [CommonModule],
})
export class PokedexPageModule implements OnInit {
  // @Input() pokemons!: SimplePokemon[];

  @Input() wrapperMessage!: string;
  @Input() isLoading!: boolean;
  @Input() isSearch!: boolean;
  @Input() isDetails!: boolean;
  @Input() isError!: boolean;
  @Input() errorMessage!: string;

  constructor() {}

  ngOnInit(): void {}
}
