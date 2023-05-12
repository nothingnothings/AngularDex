import { NgModule } from '@angular/core';
import { SpinnerComponent } from '../components/UI/spinner/spinner.component';
import { PokedexWrapperComponent } from '../pages/PokedexPage/pokedexWrapper/pokedexWrapper.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokedexWrapperComponent, SpinnerComponent],
  exports: [PokedexWrapperComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
