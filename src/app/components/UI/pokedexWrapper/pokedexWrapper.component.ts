import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './pokedexWrapper.component.html',
  styleUrls: ['./pokedexWrapper.component.scss'],
  selector: 'app-pokedex-wrapper',
})
export class PokedexWrapperComponent implements OnInit {
  propMessage!: string;
  @Input() message!: string;
  @Input() isDetails!: boolean;
  @Input() test!: string;

  constructor() {}

  ngOnInit(): void {}
}
