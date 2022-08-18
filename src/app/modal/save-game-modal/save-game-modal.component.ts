import { Component, Input, OnInit } from '@angular/core';
import { GameComponent } from 'src/app/game/game.component';

@Component({
  selector: 'app-save-game-modal',
  templateUrl: './save-game-modal.component.html',
  styleUrls: ['./save-game-modal.component.sass']
})
export class SaveGameModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  performSaveAction(): void {
    if (this.saveName.length === 0) {
      return;
    }
    
    this.game.game.saveName = this.saveName;
    this.game.saveGame()
    this.close();
  }

  visible: boolean = false;

  @Input() game!: GameComponent;
  saveName: string = "";
}
