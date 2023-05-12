import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/types/pokemon.model';
import axios, { AxiosError } from 'axios';

@Component({
  templateUrl: './pokemonDetailsCard.component.html',
  selector: 'app-pokemon-details-card',
  styleUrls: ['./pokemonDetailsCard.component.scss'],
})
export class PokemonDetailsCardComponent implements OnInit {
  // @Input() pokemon!: Pokemon;

  isLoading = false;
  detailsIsError = false;
  detailsIsErrorMessage = '';
  pokemon: Pokemon | null = null;

  constructor(
    // public pokemon: null | Pokemon,

    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      const pokemonId = params.get('pokemonId');

      this.loadPokemon(pokemonId as string);
    });
  }

  pokemonType() {
    return this.pokemon?.types[0].type.name;
  }

  zeroPad(num: number, places: number) {
    return String(num).padStart(places, '0');
  }

  get pokemonImage() {
    return `https://img.pokemondb.net/artwork/large/${this.pokemon?.name}.jpg`;
  }

  async loadPokemon(pokemonId: string) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      this.isLoading = false;
      this.pokemon = response.data;
      console.log(this.pokemon);
    } catch (error: unknown | Error) {
      console.log(error);
      this.detailsIsError = true;
      if (error instanceof AxiosError) {
        this.detailsIsErrorMessage = error.message;
      }
    }
  }
}
