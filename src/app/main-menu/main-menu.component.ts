import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit {

  constructor() {
    this.app = AppComponent.app;
  }

  ngOnInit(): void {
  }

  app: AppComponent;
}
