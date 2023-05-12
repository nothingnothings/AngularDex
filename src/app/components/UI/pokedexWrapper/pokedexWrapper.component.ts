import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './pokedexWrapper.component.html',
  styleUrls: ['./pokedexWrapper.component.scss'],
  selector: 'app-pokedex-wrapper',
})
export class PokedexWrapperComponent implements OnInit {
  @Input() message!: string;
  @Input() isDetails!: boolean;

  constructor() {
    console.log(this);
    // this.message = this.wrapperMessage;
  }

  ngOnInit(): void {}
}
