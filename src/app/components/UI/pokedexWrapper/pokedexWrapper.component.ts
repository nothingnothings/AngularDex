import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './pokedexWrapper.component.html',
  styleUrls: ['./pokedexWrapper.component.scss'],
  selector: 'app-navigation-item',
})
export class NavigationItemComponent implements OnInit {
  @Input() message!: string;
  @Input() isDetails!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
