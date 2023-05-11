import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './pokemonDetailsPage.component.html',
  selector: 'app-pokemon-details-page',
})
export class PokemonDetailsPageComponent implements OnInit {
  @Input() link!: string;
  @Input() text!: string;
  @Input() imagePath!: string;
  @Input() key!: string;

  constructor() {}

  ngOnInit(): void {}
}
