import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokedexComponent } from './pages/PokedexPage/pokedex/pokedex.component';
import { PokemonDetailsCardComponent } from './pages/PokemonDetailsPage/pokemonDetailsCard/pokemonDetailsCard.component';

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
    component: PokemonDetailsCardComponent,
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
