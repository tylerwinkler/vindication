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

  constructor(private gameService: GameService) {
    this.employees = gameService.get().store.employees;
  }

  ngOnInit(): void {
    this.candidates = [new Employee("Bob"),
    new Employee("Jill"),
    new Employee("JillBob")]
  }

  hireCandidate(candidate: Employee){
    if (this.selectedCandidate) {
      this.gameService.get().store.hireEmployee(this.selectedCandidate);
    }
  }
  

  fireEmployee(employee: Employee){
    if (this.selectedEmployee) {
      this.gameService.get().store.fireEmployee(employee);
      this.selectedEmployee = null;
    }
  }

  selectEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  selectedCandidate: Employee | null = null;
  candidates: Employee[] | null = null;

  selectedEmployee: Employee | null = null;
  employees: Employee[] | null = null;
}