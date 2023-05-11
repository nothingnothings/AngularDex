import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/types/pokemon.model';
import axios, { AxiosError } from 'axios';

@Component({
  templateUrl: './pokemonDetails.component.html',
  selector: 'app-pokemon-details-page',
})
export class PokemonDetailsPageComponent implements OnInit {
  constructor(
    public pokemon: null | Pokemon,
    public isLoading: boolean = false,
    public detailsIsError: boolean = false,
    public detailsIsErrorMessage: string = '',
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const pokemonId = params.get('pokemonId');

      this.loadPokemon(pokemonId as string);
    });
  }

  async loadPokemon(pokemonId: string) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      this.isLoading = false;
      this.pokemon = response.data;
    } catch (error: unknown | Error) {
      console.log(error);
      this.detailsIsError = true;
      if (error instanceof AxiosError) {
        this.detailsIsErrorMessage = error.message;
      }
    }
  }
}
