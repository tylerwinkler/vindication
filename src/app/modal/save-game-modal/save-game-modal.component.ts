import { Component, OnInit } from '@angular/core';

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

  visible: boolean = false;

}
