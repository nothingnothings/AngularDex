import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PokedexService } from 'src/services/pokedex.service';
import { SimplePokemon } from '../types/simplePokemon.model';

@Injectable({ providedIn: 'root' })
export class PokedexResolverService implements Resolve<SimplePokemon[]> {
  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): SimplePokemon[] | Observable<SimplePokemon[]> | Promise<SimplePokemon[]> {
    const pokemons = this.pokedexService.getPokemons();

    if (pokemons.length === 0) {
      return this.pokedexService.loadPokemons(); // vai 'resolve' essa data ANTES DE NOSSOS COMPONENTS SEREM CARREGADOS, ANTES DA PAGE DE 'recipe-book' SER CARREGADA...
    } else {
      console.log(pokemons);
      return pokemons;
    }
  }

  constructor(private pokedexService: PokedexService) {}
}
