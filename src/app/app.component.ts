import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  static app: AppComponent;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === "F5") {
      this.debug = !this.debug;
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    AppComponent.app = this;
  }

  changeState(state: string): void {
    this.activeState = state;
  }

  activeState = 'mainmenu';

  title = 'vindication';

  debug = false;
}
