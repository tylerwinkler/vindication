import { Injectable } from "@angular/core"

@Injectable({ providedIn: 'root' })
export class Game {
    storeName = "";
    saveName = ""; // When empty, prompt for save name, otherwise overwrite existing
    money = 0;
    day = 1;
    month = 1;
    year = 1970;
    daysPassed = 0;
}
