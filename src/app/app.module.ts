import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationItemsComponent } from './components/UI/Toolbar/MainNavigation/NavigationItems/navigationItems.component';
import { NavigationItemComponent } from './components/UI/Toolbar/MainNavigation/NavigationItems/NavigationItem/navigationItem.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationItemsComponent,
    NavigationItemComponent,

    // ToolbarComponent,
    // MainNavigationComponent,
    // NavigationItemsComponent,
    // NavigationItemComponent,
    // PokeBallComponent,
    // SpinnerComponent,
    // PokedexWrapperComponent,
    // ErrorComponent,
    // PokedexComponent,
    // CardComponent,
    // PokemonDetailsCardComponent,
    // PokeSearchComponent,
    // PokedexPageComponent,
    // PokemonDetailsPageComponent,
    // PokemonSearchPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
