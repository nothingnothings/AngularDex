import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/UI/toolbar/toolbar.component';
import { MainNavigationComponent } from './components/UI/toolbar/mainNavigation/mainNavigation.component';
import { NavigationItemsComponent } from './components/UI/toolbar/mainNavigation/navigationItems/navigationItems.component';
import { PokeBallComponent } from './components/UI/pokeBall/pokeBall.component';
import { SpinnerComponent } from './components/UI/spinner/spinner.component';
import { ErrorComponent } from './components/errorComponent/errorComponent.component';

import { PokemonDetailsCardComponent } from './pages/PokemonDetailsPage/pokemonDetailsCard/pokemonDetailsCard.component';
import { PokeSearchComponent } from './pages/PokedexPage/pokeSearch/pokeSearch.component';
import { CommonModule } from '@angular/common';
// import { PokedexComponent } from './pages/PokedexPage/pokedex/pokedex.component';
import { PokedexPageModule } from './modules/pokedex.module';
import { PokemonDetailsModule } from './modules/pokemonDetails.module';
import { PokedexService } from 'src/app/services/pokedex.service';
import { SharedModule } from './modules/shared.module';
import { LoadingInterceptor } from './interceptors/interceptor';
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
    // PokeBallComponent,
    // SpinnerComponent,
    // PokedexWrapperComponent,
    // PokedexComponent,
    // PokedexPageComponent
    // PokeSearchComponent,
    // CardComponent,
    // PokemonDetailsCardComponent,

    // PokemonSearchPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    // PokedexPageModule,
    // PokemonDetailsModule,
  ],
  // exports: [PokedexWrapperComponent],

  providers: [
    PokedexService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
