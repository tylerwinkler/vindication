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

  static game = new Game();
}
