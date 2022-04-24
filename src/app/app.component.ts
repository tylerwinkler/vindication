import { Component, HostListener } from '@angular/core';
import { Game } from './game';
import { GameService } from './game.service';
import { NewGameBuilder } from './new-game-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  static app: AppComponent;

  constructor(private gameService: GameService) {this.game = gameService.get()}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === "F5") {
      this.debug = !this.debug;
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    AppComponent.app = this;
  }

  changeState(state: string): void {
    this.activeState = state;
  }
  
  activeState = 'mainMenu';

  title = 'vindication';

  debug = false;

  game: Game;
}
