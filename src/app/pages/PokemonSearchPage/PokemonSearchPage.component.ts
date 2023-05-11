import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './PokemonSearchPage.component.html',
  selector: 'app-pokemon-search-page',
})
export class PokemonSearchPageComponent implements OnInit {
  @Input() link!: string;
  @Input() text!: string;
  @Input() imagePath!: string;
  @Input() key!: string;

  constructor() {}

  ngOnInit(): void {}
}
