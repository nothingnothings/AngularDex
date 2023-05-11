import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './pokemonDetailsCard.component.html',
  selector: 'app-pokemon-details-card',
  styleUrls: ['./pokemonDetailsCard.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() errorMessage!: string;

  constructor() {}

  ngOnInit(): void {}
}
