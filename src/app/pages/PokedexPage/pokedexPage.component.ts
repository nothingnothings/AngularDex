import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './pokedexPage.component.html',
  selector: 'app-pokedex-page',
})
export class PokedexPageComponent implements OnInit {
  @Input() link!: string;
  @Input() text!: string;
  @Input() imagePath!: string;
  @Input() key!: string;

  constructor() {}

  ngOnInit(): void {}
}
