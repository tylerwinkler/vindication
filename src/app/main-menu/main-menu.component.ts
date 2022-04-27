import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GameService } from '../services/game.service';
import { NewGameBuilder } from '../new-game-builder';
import { Save } from '../saves/save';
import { LocalStorageSaveManager } from '../saves/local-storage-save-manager';
import { SavedGameBuilder } from '../saved-game-builder';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit {

  constructor(private gameService: GameService) {
    this.title = AppComponent.app.title;
    let lsm = new LocalStorageSaveManager(localStorage);
    if (lsm.getSaveCount() > 0) {
      this.save = lsm.getMostRecentSave();
    }
  }

  ngOnInit(): void {
  }

  continueGame(): void {
    this.gameService.set(new SavedGameBuilder(this.save!).build());
    AppComponent.app.changeState("playGame");
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

  save: Save | null = null;
}
