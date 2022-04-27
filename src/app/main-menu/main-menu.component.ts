import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GameService } from '../services/game.service';
import { NewGameBuilder } from '../new-game-builder';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit {

  constructor(private gameService: GameService) {this.title = AppComponent.app.title;}

  ngOnInit(): void {
  }

  startNewGame(): void {
    AppComponent.app.changeState("newGame");
  }

  openLoadGameMenu(): void {
    AppComponent.app.changeState("loadGame");
  }

  exit(): void {
    open('about:blank', '_self');
  }

  title: string;
}
