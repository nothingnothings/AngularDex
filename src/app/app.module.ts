// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { PokedexPageModule } from './modules/pokedex.module';
import { PokemonDetailsModule } from './modules/pokemonDetails.module';
import { SharedModule } from './modules/shared.module';
import { HttpClientModule } from '@angular/common/http';

// VARIABLES/TOKENS
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// COMPONENTS
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/UI/toolbar/toolbar.component';
import { MainNavigationComponent } from './components/UI/toolbar/mainNavigation/mainNavigation.component';
import { NavigationItemsComponent } from './components/UI/toolbar/mainNavigation/navigationItems/navigationItems.component';
import { ErrorComponent } from './components/errorComponent/errorComponent.component';

// SERVICES
import { PokedexService } from 'src/app/services/pokedex.service';

// INTERCEPTORS
import { LoadingInterceptor } from './interceptors/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ToolbarComponent,
    MainNavigationComponent,
    NavigationItemsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
  ],

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
