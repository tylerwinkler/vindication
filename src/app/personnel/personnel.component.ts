import { Component, OnInit } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { GameService } from '../game.service';
import { Game } from '../game';
import { Employee } from '../employee';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.sass']
})
export class PersonnelComponent implements OnInit {

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
  }

  hireEmployee(){
    this.emp = this.gameService.get().store.hireEmployee();
  }
  emp: Employee | null = null

  fireEmployee(){
    this.gameService.get().store.fireEmployee(this.emp!);
    this.emp = null;
  }
}