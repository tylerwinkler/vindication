import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Game } from '../game';
import { LocalStorageSaveReader } from '../saves/local-storage-save-reader';
import { MySave } from '../saves/my-save';

@Component({
  selector: 'app-load-game',
  templateUrl: './load-game.component.html',
  styleUrls: ['./load-game.component.sass']
})
export class LoadGameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getSaveMoney(): number {
    return new LocalStorageSaveReader().deserialize().version === 1 ? (<MySave>(new LocalStorageSaveReader().deserialize())).money : 0;
  }

  loadGame(): void {
    let game = new Game();
    game.money = this.getSaveMoney();

    AppComponent.app.bindGame(game);
  }
}
