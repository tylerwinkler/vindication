import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GameService } from '../services/game.service';
import { NewGameBuilder } from '../new-game-builder';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.sass']
})
export class NewGameComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void { }

  goToMainMenu(): void {
    AppComponent.app.changeState("mainMenu");
  }

  startNewGame(): void {
    if (this.storeSize === 'small') {
      this.gameService.set(new NewGameBuilder()
      .setMoney(NewGameComponent.StartingMoney)
      .setName(this.storeName)
      .build());
    }
    else if (this.storeSize === 'large') {
      this.gameService.set(new NewGameBuilder()
      .setMoney(NewGameComponent.StartingMoney)
      .setName(this.storeName)
      .build());
    }
    else {
      return;
    }

    AppComponent.app.changeState("playGame");
  }

  setStoreSize(el: HTMLElement, size: string) {
    document.querySelectorAll('.store-size-button').forEach(e => e.classList.remove('active'));
    el.classList.add('active');
    this.storeSize = size;
  }

  storeSize = 'none';
  storeName = '';

  availableLoan = NewGameComponent.StartingMoney;
  
  private static StartingMoney = 1000000; // $1,000,000
}
