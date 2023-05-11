import { Component } from '@angular/core';
import { NavItem } from 'src/app/types/navItem.model';

@Component({
  templateUrl: './NavigationItems.component.html',
  styleUrls: ['./NavigationItems.component.scss'],
  selector: 'app-navigation-items',
})
export class NavigationItemsComponent {
  navItems: NavItem[] = [
    { id: 'pokedex', text: 'Pokédex', link: '/' },
    { id: 'search', text: 'Procurar por um Pokémon', link: '/search' },
  ];
}
