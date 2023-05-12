import { NgModule } from '@angular/core';
import { PokedexComponent } from '../pages/PokedexPage/pokedex/pokedex.component';
import { CardComponent } from '../pages/PokedexPage/pokedex/card/card.component';
import { PokeSearchComponent } from '../pages/PokedexPage/pokeSearch/pokeSearch.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [PokedexComponent, CardComponent, PokeSearchComponent],
  exports: [PokedexComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class PokedexPageModule {}
