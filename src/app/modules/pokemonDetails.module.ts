import { NgModule } from '@angular/core';
// import { PokedexWrapperComponent } from '../pages/PokedexPage/pokedexWrapper/pokedexWrapper.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonDetailsCardComponent } from '../pages/PokemonDetailsPage/pokemonDetailsCard/pokemonDetailsCard.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [PokemonDetailsCardComponent],
  exports: [PokemonDetailsCardComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class PokemonDetailsModule {}
