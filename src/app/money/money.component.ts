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
    let str = '$' + (Math.floor(Math.abs(this.money) * 100) / 100).toString();

    if (this.signedNegative && !this.signed) {
      if (this.money < 0) str = "-" + str;
    }
    else if (this.signed) {
      if (this.money > 0) str = "+" + str;
      else if (this.money < 0) str = "-" + str;
    }

    return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  @Input() money!: number;

  @Input() colored: boolean = false;
  @Input() signed: boolean = false;
  @Input() signedNegative: boolean = false;
}
