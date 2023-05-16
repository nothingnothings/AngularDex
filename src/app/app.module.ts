import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/UI/toolbar/toolbar.component';
import { MainNavigationComponent } from './components/UI/toolbar/mainNavigation/mainNavigation.component';
import { NavigationItemsComponent } from './components/UI/toolbar/mainNavigation/navigationItems/navigationItems.component';
import { ErrorComponent } from './components/errorComponent/errorComponent.component';
import { CommonModule } from '@angular/common';
import { PokedexService } from 'src/services/pokedex.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ToolbarComponent,
    MainNavigationComponent,
    NavigationItemsComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, CommonModule],

  providers: [PokedexService],
  bootstrap: [AppComponent],
})
export class AppModule {}
