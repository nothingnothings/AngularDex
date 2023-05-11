import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './pokedex.component.html',
  selector: 'app-pokedex',
})
export class PokedexComponent implements OnInit {
  @Input() isLoading!: boolean;
  @Input() wrapperMessage!: string;
  @Input() isDetails!: boolean;
  @Input() isSearch!: boolean;
  @Input() inputChanged!: VoidFunction;

  constructor() {}

  ngOnInit(): void {}
}
