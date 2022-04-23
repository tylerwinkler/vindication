import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  static app: AppComponent;

  ngOnInit(): void {
    AppComponent.app = this;

    document.querySelectorAll(".sidebar-item.clickable").forEach((e)=>{e.addEventListener("click", ()=>{
      document.querySelectorAll(".sidebar-item.clickable").forEach((e2)=>e2.classList.remove("active"));
      e.classList.add('active');
    })});

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

  advanceDay(): void {
    ++this.day;
    if (this.day > 30) {
      ++this.month;
      this.day = 1;
    }

    if (this.month > 12) {
      ++this.year;
      this.month = 1;
    }

    // You make $4000 + a random 0-1000 a day
    this.money += 4000 + Math.random() * 1000;
  }

  formattedMoney(): string {
    let str = Math.floor(this.money).toString();
    return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  getWeek(): number {
    return 1 + Math.floor(this.daysPassed / 7); 
  }

  title = 'vindication';
  val = 0;
  paused = false;

  day = 1;
  month = 1;
  year = 1970;
  daysPassed = 0;

  // Speed represents the speed-up factor compared to the base 1x speed. 0.5 is half speed, 2 is double speed, etc.
  speed = 1;

  money = 0;

  interval: number | null = null;

  debug = false;

  // Times per second that the game ticks
  updateRate = 10;

  // How many ticks before a day passes. day length in real seconds = ticksPerDay / updateRate
  ticksPerDay = 20;
}