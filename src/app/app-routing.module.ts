import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokedexComponent } from './pages/PokedexPage/pokedex/pokedex.component';
import { PokemonDetails } from './pages/PokemonDetailsPage/pokemonDetails.component';

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
    component: PokedexComponent,
  },

  {
    path: 'pokedex/:pokemonId',
    component: PokemonDetails,
  },
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
