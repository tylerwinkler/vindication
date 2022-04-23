import { Component } from '@angular/core';

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
      this.debug = !this.debug
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    AppComponent.app = this;

    document.querySelectorAll(".sidebar-item.clickable").forEach((e)=>{e.addEventListener("click", ()=>{
      document.querySelectorAll(".sidebar-item.clickable").forEach((e2)=>e2.classList.remove("active"));
      e.classList.add('active');
    })});

    let consoleInput = document.querySelector(".console-input");
    if (consoleInput) {
      consoleInput.addEventListener('keydown', (e) => {
        let code = (<KeyboardEvent>e).code;
        if (code === "Enter") {
          this.executeCommand((<HTMLInputElement>e.target).value);
          (<HTMLInputElement>e.target).value = "";
          e.preventDefault();
        }
      });
    }

    // The game should start paused
    this.paused = true;

   this.beginInterval();
  }

  tick(): void {
    if (this.paused) {
      return;
    }
    ++this.val;
    if (this.val % 20 == 0) { // 2 seconds
      this.advanceDay();
    }
  }

  executeCommand(cmd: string): boolean {
    // Nothing to process
    if (cmd.trim().length === 0) return true;

    let cmdArr = cmd.toLowerCase().split(" ");

    // Nothing to process
    if (cmdArr.length === 0) return true;

    if (cmdArr[0] == "advanceDay".toLowerCase()) {
      let days = parseInt(cmdArr[1], 10) || 1;
      this.advanceDay(days);
    }
    else if (cmdArr[0] == "setSpeed".toLowerCase()) {
      let speed = parseInt(cmdArr[1], 10) || 1;
      this.speed = speed;
      this.beginInterval();
    }

    return true;
  }

  // setSpeed sets the speed to a clamped value between 0 (basically paused) and 3 for triple speed
  setSpeed(val: number): void {
    this.speed = Math.max(0, Math.min(val, 3));
    this.paused = this.speed === 0;
    this.beginInterval();
  }

  beginInterval(): void {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.interval = setInterval(() => {
      this.tick()
    }, 1000 / 10 * 1/this.speed) // 10 times per second times );
  }

  togglePause(): void {
    this.paused = !this.paused;
  }

  advanceDay(daysToAdvance?: number): void {
    if (daysToAdvance === undefined) {
      daysToAdvance = 1;
    }

    // We cant advance forward a negative amount of days
    daysToAdvance = Math.max(0, daysToAdvance);

    this.day += daysToAdvance;
    this.daysPassed += daysToAdvance;

    while (this.day > 30) {
      ++this.month;
      this.day -= 30;
    }

    while (this.month > 12) {
      ++this.year;
      this.month -= 12;
      this.daysPassed -= 360;
    }

    // Simulate the days passing for RNG purposes
    for (var i = 0; i < daysToAdvance; ++i) {
    // You make $4000 + a random 0-1000 a day
    this.money += 4000 + Math.random() * 1000;
    }
  }

  formattedMoney(): string {
    let str = Math.floor(this.money).toString();
    return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  title = 'vindication';
  val = 0;
  paused = false;

  day = 1;
  month = 1;
  year = 1970;

  // Speed represents the speed-up factor compared to the base 1x speed. 0.5 is half speed, 2 is double speed, etc.
  speed = 1;

  money = 0;

  interval: number | null = null;

  debug = false;
}
