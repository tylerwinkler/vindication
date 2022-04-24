import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ResearchTreeComponent } from './research-tree/research-tree.component';
import { ResearchDetailComponent } from './research-detail/research-detail.component';
import { GameComponent } from './game/game.component';
import { LoadGameComponent } from './load-game/load-game.component';
import { Game } from './game';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ResearchTreeComponent,
    ResearchDetailComponent,
    GameComponent,
    LoadGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Game],
  bootstrap: [AppComponent]
})
export class AppModule { }
