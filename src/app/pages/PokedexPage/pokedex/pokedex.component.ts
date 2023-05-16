import { Component, Input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  NavigationStart,
  Router,
  RoutesRecognized,
} from '@angular/router';
import axios, { AxiosError } from 'axios';
import { SimplePokemon } from 'src/app/types/simplePokemon.model';

@Component({
  templateUrl: './pokedex.component.html',
  selector: 'app-pokedex',
})
export class PokedexComponent implements OnInit {
  pokemons: SimplePokemon[] = [];
  isError!: boolean;
  errorMessage!: string;
  message!: string;
  showWrapper!: boolean;

  @Input() isLoading!: boolean;
  @Input() wrapperMessage!: string;
  @Input() isDetails!: boolean;
  @Input() isSearch!: boolean;
  @Input() inputChanged!: VoidFunction;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.message = 'Pokédex';
    this.showWrapper = true;
  }

  ngOnInit(): void {
    this.loadPokemon();

    const activeUrl = this.router.url;

    console.log(activeUrl, 'URL DOS GURI');
    if (activeUrl === '/pokedex/search') {
      this.message = 'Procurar por um Pokémon';
    }

    this.router.events.subscribe((event: Event) => {
      console.log('EXEMPLO', event);
      if (event instanceof NavigationEnd) {
        console.log('EXEMPLO2', event);
        if (event.url === '/pokedex') {
          this.message = 'Pokedéx';
        } else {
          this.message = 'Procurar por um Pokémon';
        }
      }
    });
  }

  updated() {}

  async loadPokemon() {
    this.isLoading = true;
    try {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=800'
      );

      const alteredPokemons = response.data.results.map(
        (pokemon: SimplePokemon, index: number) => {
          return {
            id: index + 1,
            url: pokemon.url,
            name: pokemon.name,
          };
        }
      );

      this.pokemons = alteredPokemons;
      this.isLoading = false;
    } catch (error: unknown | Error) {
      console.log(error);
      this.isError = true;
      if (error instanceof AxiosError) {
        this.errorMessage = error.message;
      }
    }
  }
}
