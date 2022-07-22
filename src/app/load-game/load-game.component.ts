import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Game } from '../models/game';
import { GameService } from '../services/game.service';
import { SavedGameBuilder } from '../saved-game-builder';
import { LocalStorageSaveManager } from '../saves/local-storage-save-manager';
import { Save } from '../saves/save';

@Component({
  selector: 'app-load-game',
  templateUrl: './load-game.component.html',
  styleUrls: ['./load-game.component.sass']
})
export class LoadGameComponent implements OnInit {

  constructor(private gameService: GameService) {
    this.populateSaves();
   }

  ngOnInit(): void {
  }

  populateSaves(): void {
    let lsm = new LocalStorageSaveManager(localStorage);

    let saveNames = lsm.getSaveNames();

    this.saves = new Array<Save>();
    for (let saveName of saveNames) {
      let s = lsm.getSave(saveName);
      console.log(s);
      if (s) this.saves.push(s);
    }
  }

  loadGame(save: Save): void {
    this.gameService.set(new SavedGameBuilder(save).build());
    AppComponent.app.changeState("playGame");
  }

  goToMainMenu(): void {
    AppComponent.app.changeState("mainMenu");
  }

  exportSave(save: Save): void {
    this.downloadAsFile(btoa(JSON.stringify(save)), "mysave.txt");
  }

  deleteSave(save: Save): void {
    let lsm = new LocalStorageSaveManager(localStorage);
    lsm.deleteSave(save);
    this.populateSaves();
    console.log('clicked');
  }

  downloadAsFile(text: string, fileName: string): void {
    const downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
    downloadLink.click();
 }

  saves = new Array<Save>();
}
