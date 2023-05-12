import { NgModule } from '@angular/core';
import { SpinnerComponent } from '../components/UI/spinner/spinner.component';
import { PokedexWrapperComponent } from '../components/UI/pokedexWrapper/pokedexWrapper.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokeBallComponent } from '../components/UI/pokeBall/pokeBall.component';

@NgModule({
  declarations: [PokedexWrapperComponent, SpinnerComponent, PokeBallComponent],
  exports: [PokedexWrapperComponent, SpinnerComponent, PokeBallComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
