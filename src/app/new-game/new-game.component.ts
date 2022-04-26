import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GameService } from '../game.service';
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
      .setMoney(NewGameComponent.StartingMoney_Small)
      .setName(this.storeName)
      .build());
    }
    else if (this.storeSize === 'large') {
      this.gameService.set(new NewGameBuilder()
      .setMoney(NewGameComponent.StartingMoney_Large)
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

  formattedMoney(val: number): string {
    let str = Math.floor(val).toString();
    return '$' + str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  storeSize = 'none';
  storeName = '';

  readonly startingMoney_S = NewGameComponent.StartingMoney_Small;
  readonly startingMoney_L = NewGameComponent.StartingMoney_Large;
  
  private static StartingMoney_Small = 1000000; // $1,000,000
  private static StartingMoney_Large = 500000; // $500,000
}
