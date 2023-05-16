import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { SimplePokemon } from 'src/app/types/simplePokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';

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
  isLoading!: boolean;

  // @Input() isLoading!: boolean;
  @Input() wrapperMessage!: string;
  @Input() isDetails!: boolean;
  @Input() isSearch!: boolean;
  @Input() inputChanged!: VoidFunction;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pokedex: PokedexService
  ) {
    this.message = 'Pokédex';
    this.showWrapper = true;
  }

  ngOnInit(): void {
    this.pokemons = this.pokedex.getPokemons();

    const activeUrl = this.router.url;

    if (activeUrl === '/pokedex/search') {
      this.message = 'Procurar por um Pokémon';
      this.isDetails = false;
    }

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/pokedex') {
          this.message = 'Pokedéx';
          this.pokedex.resetPokemon();
        } else {
          this.message = 'Procurar por um Pokémon';
        }
      }
    });

    this.pokedex.pokedexChanged.subscribe((pokemons) => {
      this.pokemons = pokemons;
      if (this.pokemons.length < 5) {
        this.isDetails = true;
      } else {
        this.isDetails = false;
      }
    });

    console.log('STARTED');
  }
}
