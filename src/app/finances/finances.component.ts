import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { FinancialLineItem } from '../models/store';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.sass']
})
export class FinancesComponent implements OnInit {

  constructor(private gameService: GameService) {this.finances = gameService.get().store.getFinances(); this.displayArr = (this.finances);}

  ngOnInit(): void {
  }

  finances: Array<FinancialLineItem>;

  displayArr: Array<FinancialLineItem>;
}
