import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.sass']
})
export class MoneyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formattedString(): string {
    let str = Math.floor(this.money).toString();

    if (this.plusIndicator && this.money > 0) {
      str = "+" + str;
    }

    return '$' + str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  @Input() money!: number;

  @Input() colored: boolean = false;
  @Input() plusIndicator: boolean = false;
}
