import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../models/game';
import { Employee } from '../models/employee';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.sass']
})
export class PersonnelComponent implements OnInit {

  constructor(private gameService: GameService) {
    this.employees = gameService.get().store.employees;
  }

  ngOnInit(): void {
    this.candidates = [new Employee("Bob"),
    new Employee("Jill"),
    new Employee("JillBob")]
  }

  hireCandidate(candidate: Employee) {
      if (!this.gameService.get().store.hireEmployee(candidate)) {
        this.error = "Failed to hire. Store is at max capacity";
        setTimeout(()=>this.error = "", 2000);
        return;
      }
      if (this.candidates) {
        this.candidates = this.candidates.filter(c => c != candidate);
      }
  }
  

  fireEmployee(employee: Employee) {
      this.gameService.get().store.fireEmployee(employee);
  }

  candidates: Employee[] | null = null;

  employees: Employee[] | null = null;

  error: string = "";
}