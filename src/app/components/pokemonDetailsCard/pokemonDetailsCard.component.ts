import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/types/pokemon.model';

@Component({
  templateUrl: './pokemonDetailsCard.component.html',
  selector: 'app-pokemon-details-card',
  styleUrls: ['./pokemonDetailsCard.component.scss'],
})
export class PokemonDetailsCardComponent implements OnInit {
  @Input() pokemon!: Pokemon;

  constructor() {}

  ngOnInit(): void {}

  pokemonType() {
    return this.pokemon?.types[0].type.name;
  }

  zeroPad(num: number, places: number) {
    return String(num).padStart(places, '0');
  }

  get pokemonImage() {
    return `https://img.pokemondb.net/artwork/large/${this.pokemon?.name}.jpg`;
  }
}
