import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  static app: AppComponent;

  ngOnInit(): void {
    AppComponent.app = this;
  }

  changeState(state: string): void {
    this.activeState = state;
  }

  activeState = 'mainmenu';

  title = 'vindication';
}
