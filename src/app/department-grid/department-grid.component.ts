import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-department-grid',
  templateUrl: './department-grid.component.html',
  styleUrls: ['./department-grid.component.sass']
})
export class DepartmentGridComponent implements OnInit {

  constructor(private gameService: GameService) {this.departments = gameService.get().store.departments;}

  ngOnInit(): void {
  }
  
  departments: Array<Department>;
}
