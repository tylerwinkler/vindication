import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GameService } from '../game.service';
import { NewGameBuilder } from '../new-game-builder';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit {

  constructor(private gameService: GameService) {
    this.app = AppComponent.app;
  }

  ngOnInit(): void {
  }

  startNewGame(): void {
    this.gameService.set(new NewGameBuilder().build());
    this.app.changeState("playGame");
  }

  openLoadGameMenu(): void {
    this.app.changeState("loadGame");
  }

  app: AppComponent;
}
