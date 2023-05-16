import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonDetailsCardComponent } from '../pages/PokemonDetailsPage/pokemonDetailsCard/pokemonDetailsCard.component';
import { SharedModule } from './shared.module';
import { PokemonDetails } from '../pages/PokemonDetailsPage/pokemonDetails.component';

@NgModule({
  declarations: [PokemonDetailsCardComponent, PokemonDetails],
  exports: [PokemonDetailsCardComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class PokemonDetailsModule {}
