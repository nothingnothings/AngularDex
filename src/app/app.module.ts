import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/UI/toolbar/toolbar.component';
import { MainNavigationComponent } from './components/UI/toolbar/mainNavigation/mainNavigation.component';
import { NavigationItemsComponent } from './components/UI/toolbar/mainNavigation/navigationItems/navigationItems.component';
import { PokeBallComponent } from './components/UI/pokeBall/pokeBall.component';
import { SpinnerComponent } from './components/UI/spinner/spinner.component';
import { ErrorComponent } from './components/errorComponent/errorComponent.component';
import { PokedexWrapperComponent } from './components/UI/pokedexWrapper/pokedexWrapper.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { CardComponent } from './components/pokedex/card/card.component';
import { PokemonDetailsCardComponent } from './components/pokemonDetailsCard/pokemonDetailsCard.component';
import { PokeSearchComponent } from './components/pokeSearch/pokeSearch.component';
import { CommonModule } from '@angular/common';
// import { PokedexPageComponent } from './pages/PokedexPage/pokedex.component';
// import { PokemonDetailsPageComponent } from './pages/PokemonDetailsPage/pokemonDetails.component';
// import { PokemonSearchPageComponent } from './pages/PokemonSearchPage/PokemonSearch.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ToolbarComponent,
    MainNavigationComponent,
    NavigationItemsComponent,
    NavigationItemComponent,
    PokeBallComponent,
    SpinnerComponent,
    PokedexWrapperComponent,
    PokedexComponent,
    PokeSearchComponent,
    CardComponent,
    PokemonDetailsCardComponent,

    // PokemonSearchPageComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
