import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './pokeSearch.component.html',
  selector: 'app-poke-search',
})
export class PokeSearchComponent implements OnInit {
  @Input() inputChanged!: VoidFunction;

  constructor() {}

  ngOnInit(): void {}
}
