import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/types/navItem.model';

@Component({
  templateUrl: './NavigationItems.component.html',
  styleUrls: ['./NavigationItems.component.scss'],
  selector: 'app-navigation-items',
})
export class NavigationItemsComponent implements OnInit {
  navItems: NavItem[] = [
    { id: 'pokedex', text: 'Pokédex', link: '/pokedex', exact: true },
    { id: 'search', text: 'Procurar por um Pokémon', link: '/pokedex/search', exact: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
