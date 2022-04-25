import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  get(): Game {
    return GameService.game;
  }

  set(game: Game) {
    GameService.game = game;
  }

  static game = new Game();
}
