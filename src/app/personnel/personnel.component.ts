import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../models/game';
import { Employee } from '../models/employee';

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