import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  ngOnInit(): void {
    setInterval(() => this.tick(), 1000 / 10) // 10 times per second
  }

  tick(): void {
    if (this.paused) {
      return;
    }
    ++this.val;
  }

  togglePause(): void {
    this.paused = !this.paused;
  }

  title = 'vindication';
  val = 0;
  paused = false;
}
