import { Component, OnInit } from '@angular/core';
import { ResearchTreeComponent } from '../research-tree/research-tree.component';
import { AppComponent } from '../app.component';
import { Game } from '../models/game';
import { GameService } from '../services/game.service';
import { LocalStorageSaveManager } from '../saves/local-storage-save-manager';
import { Save } from '../saves/save';
import { PersonnelComponent } from '../personnel/personnel.component';
import { Employee } from '../models/employee';
import { FinancialLineItem, Store } from '../models/store';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  constructor(private gameService: GameService) {this.game = this.gameService.get();}

  ngOnInit(): void {
    let clickables = document.querySelectorAll(".sidebar-item.clickable:not(.time-control):not(.misc)");
    clickables.forEach((e)=>{e.addEventListener("click", ()=>{
      clickables.forEach((e2)=>e2.classList.remove("active"));
      e.classList.add('active');
    })});

    let timeControls = document.querySelectorAll(".time-control");
    timeControls.forEach((e)=>{e.addEventListener("click", ()=>{
      timeControls.forEach((e2)=>e2.classList.remove("active"));
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
    else if (cmdArr[0] == "save".toLowerCase()) {
      this.saveGame();
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

    this.game.calendar.advanceDay();
    if (this.isDebug()) {
      if (this.game.calendar.isNewWeek()) {
        console.log("Yay! New week!");
      }
      if (this.game.calendar.isNewMonth()) {
        console.log("Yay! New month!");
      }
      if (this.game.calendar.isNewYear()) {
        console.log("Yay! New year!");
      }
    }

    // We cant advance forward a negative amount of days
    daysToAdvance = Math.max(0, daysToAdvance);

    this.game.day += daysToAdvance;
    this.game.daysPassed += daysToAdvance;

    if (this.game.daysPassed % 6 == 0)
    {
      this.game.store.processEndOfWeek();
    }

    while (this.game.day > 30) {
      ++this.game.month;
      this.game.day -= 30;
      this.game.store.processEndOfMonth();
    }

    while (this.game.month > 12) {
      ++this.game.year;
      this.game.month -= 12;
      this.game.daysPassed -= 360;
    }

    // Simulate the days passing for RNG purposes
    for (var i = 0; i < daysToAdvance; ++i) {
      this.game.store.money += this.getFlow();
    }
  }

  selectMenu(menuName: string): void {
    this.menuSelected = menuName;
  }

  getWeek(): number {
    return 1 + Math.floor(this.game.daysPassed / 6); 
  }

  saveGameAs(): void {
    let results = prompt("Enter a name for this save");
      if (results && results.trim() !== "") {
        this.game.saveName = results!;
      }
      else {
        alert("Save must have a non-empty name");
        return;
      }

      this.saveGame();
  }

  saveGame(): void {
    if (this.game.saveName.trim() === "") {
      let results = prompt("Enter a name for this save");
      if (results && results.trim() !== "") {
        this.game.saveName = results!;
      }
      else {
        alert("Save must have a non-empty name");
        return;
      }
    }

    let s: Save = {
      version: 1,
      saveName: this.game.saveName,
      storeName: this.game.store.name,
      money: this.game.store.money,
      day: this.game.day,
      month: this.game.month,
      year: this.game.year,
      daysPassed: this.game.daysPassed,
      lastPlayed: Date.now(),
      employees: this.game.store.employees,
      departments: this.game.store.departments
    };

    new LocalStorageSaveManager(localStorage).putSave(s.saveName, s);
  }

  isDebug(): boolean {
    return AppComponent.app.debug;
  }

  addExpense(val: number): void {
    let ass = new FinancialLineItem("Misc", -val);
    if (this.game.store.hasFinancialItem(ass)) {
      this.game.store.updateFinancialItem(ass, false);
    }
    else {
      this.game.store.insertFinancialItem(ass);
    }
  }

  saveAndExit(): void {
    this.saveGame();
    AppComponent.app.changeState('mainMenu');
  }

  getFlow(): number {
    let n = 0;
    this.game.store.getFinances().forEach(e => n += e.value);

    return n;
  }

  val = 0;
  paused = false;
  menuSelected = "";

  // Speed represents the speed-up factor compared to the base 1x speed. 0.5 is half speed, 2 is double speed, etc.
  speed = 1;

  interval: null | ReturnType<typeof setTimeout> = null

  game: Game;

  // Times per second that the game ticks
  updateRate = 10;

  // How many ticks before a day passes. day length in real seconds = ticksPerDay / updateRate
  ticksPerDay = 20;
}