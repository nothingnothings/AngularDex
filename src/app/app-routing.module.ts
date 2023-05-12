import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokedexPageModule } from './pages/PokedexPage/pokedex.module';
// import { PokemonDetailsPageComponent } from './pages/PokemonDetailsPage/pokemonDetails.component';
// import { PokemonSearchPageComponent } from './pages/PokemonSearchPage/PokemonSearch.component';
const routes: Routes = [
  {
    ////ordem das routes importa, exatamente como no REACT ROUTER

    path: '',
    redirectTo: '/pokedex',
    pathMatch: 'full',
  },
  {
    path: 'pokedex',
    component: PokedexPageModule,
  },

  // {
  //   path: 'pokedex/:pokemonId',
  //   component: PokemonDetailsPageComponent,
  // },
  // {
  //   path: 'search',
  //   component: PokemonSearchPageComponent,
  // },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
