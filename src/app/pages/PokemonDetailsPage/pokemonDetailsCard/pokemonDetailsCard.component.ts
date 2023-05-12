import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, Type } from 'src/app/types/pokemon.model';
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
  pokemon: {
    id: number;
    name: string;
    abilities: any[];
    base_experience: number;
    height: number;
    weight: number;
    forms: any[];
    types: Type[];
  } = {
    id: 0,
    name: '',
    abilities: [],
    base_experience: 0,
    height: 0,
    weight: 0,
    forms: [],
    types: [
      {
        slot: 0,
        type: {
          url: '',
          name: '',
        },
      },
    ],
  };

  constructor(private route: ActivatedRoute) {}

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
    if (this.pokemon.name !== '') {
      return `https://img.pokemondb.net/artwork/large/${this.pokemon.name}.jpg`;
    } else {
      return null;
    }
  }

  get height() {
    return this.pokemon!.height * 10;
  }

  get weight() {
    return this.pokemon!.weight / 10;
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
