import { Injectable } from "@angular/core"
import { Calendar } from "./calendar";
import { Store } from "./store";

@Injectable({ providedIn: 'root' })
export class Game {
    constructor() {this.store = new Store();}

    saveName = "";
    day = 1;
    month = 1;
    year = 1970;
    daysPassed = 0;

    calendar: Calendar = new Calendar();

    store: Store;
}
