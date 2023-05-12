import { Component, Input, OnInit } from '@angular/core';
import { SimplePokemon } from 'src/app/types/simplePokemon.model';

@Component({
  templateUrl: './card.component.html',
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() pokemon!: SimplePokemon;

  constructor() {}

  ngOnInit(): void {}

  get pokemonName() {
    return (
      this.pokemon?.name[0].toUpperCase() +
      (this.pokemon as SimplePokemon).name.slice(1)
    );
  }

  get pokemonLink() {
    return `/pokedex/${this.pokemon?.id}`;
  }
}
