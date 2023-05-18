import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokedexComponent } from './pages/PokedexPage/pokedex/pokedex.component';
import { PokemonDetails } from './pages/PokemonDetailsPage/pokemonDetails.component';

import { PokeSearchComponent } from './pages/PokedexPage/pokeSearch/pokeSearch.component';
import { PokedexResolverService } from './resolvers/pokedex-resolver.service';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/pokedex',
  //   pathMatch: 'full',
  // },
  {
    path: 'pokedex',
    component: PokedexComponent,
    resolve: [PokedexResolverService],
    children: [
      {
        path: 'search',
        resolve: [PokedexResolverService],
        component: PokeSearchComponent,
      },
    ],
  },
  {
    path: 'pokedex/:pokemonId',
    component: PokemonDetails,
  },
  {
    path: '**',
    redirectTo: '/pokedex',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
