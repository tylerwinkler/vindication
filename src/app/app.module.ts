import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ResearchTreeComponent } from './research-tree/research-tree.component';
import { ResearchDetailComponent } from './research-detail/research-detail.component';
import { GameComponent } from './game/game.component';
import { LoadGameComponent } from './load-game/load-game.component';
import { FormsModule } from '@angular/forms';
import { PersonnelComponent } from './personnel/personnel.component';
import { NewGameComponent } from './new-game/new-game.component';
import { StoreComponent } from './store/store.component';
import { FinancesComponent } from './finances/finances.component';
import { MoneyComponent } from './money/money.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ResearchTreeComponent,
    ResearchDetailComponent,
    GameComponent,
    LoadGameComponent,
    PersonnelComponent,
    NewGameComponent,
    StoreComponent,
    FinancesComponent,
    MoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
