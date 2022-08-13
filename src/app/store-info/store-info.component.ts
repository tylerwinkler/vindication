import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.sass']
})
export class StoreInfoComponent implements OnInit {

  constructor(private gameService: GameService) { this.game = gameService.get() }

  ngOnInit(): void {
  }

  employees(): number {
    return this.game.store.employees.length;
  }

  storeSize(): number {
    return this.game.store.sqFt;
  }

  expenses(): number {
    return this.game.store.finances.reduce((partial, val) => {
      if (val.value < 0) 
        return partial + val.value;
      else return partial;
    }, 0);
  }

  profit(): number {
    return this.game.store.finances.reduce((partial, val) => {
      if (val.value > 0) 
        return partial + val.value;
      else return partial;
    }, 0);
  }

  game: Game;
}
