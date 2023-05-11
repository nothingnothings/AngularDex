import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/UI/toolbar/toolbar.component';
import { MainNavigationComponent } from './components/UI/toolbar/mainNavigation/mainNavigationComponent.component';
import { NavigationItemsComponent } from './components/UI/toolbar/mainNavigation/navigationItems/navigationItems.component';
import { NavigationItemComponent } from './components/UI/toolbar/mainNavigation/navigationItems/navigationItem/navigationItem.component';
import { PokeBallComponent } from './components/UI/pokeBall/pokeBall.component';
import { SpinnerComponent } from './components/UI/spinner/spinner.component';
import { ErrorComponent } from './components/errorComponent/errorComponent.component';
import { PokedexWrapperComponent } from './components/UI/pokedexWrapper/pokedexWrapper.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { CardComponent } from './components/pokedex/card/card.component';
import { PokemonDetailsCardComponent } from './components/pokemonDetailsCard/pokemonDetailsCard.component';
import { PokeSearchComponent } from './components/pokeSearch/pokeSearch.component';
import { PokedexPageComponent } from './pages/PokedexPage/pokedexPage.component';
import { PokemonDetailsPageComponent } from './pages/PokemonDetailsPage/pokemonDetailsPage.component';
import { PokemonSearchPageComponent } from './pages/PokemonSearchPage/PokemonSearchPage.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainNavigationComponent,
    NavigationItemsComponent,
    NavigationItemComponent,
    PokeBallComponent,
    SpinnerComponent,
    PokedexWrapperComponent,
    ErrorComponent,
    PokedexComponent,
    CardComponent,
    PokemonDetailsCardComponent,
    PokeSearchComponent,
    PokedexPageComponent,
    PokemonDetailsPageComponent,
    PokemonSearchPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
