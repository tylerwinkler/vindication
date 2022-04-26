import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { FinancialLineItem } from '../store';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.sass']
})
export class FinancesComponent implements OnInit {

  constructor(private gameService: GameService) {this.finances = gameService.get().store.getFinances()}

  ngOnInit(): void {
  }

  finances: Array<FinancialLineItem>;
}
