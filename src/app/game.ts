import { Injectable } from "@angular/core"
import { Employee } from "./employee";

@Injectable({ providedIn: 'root' })
export class Game {
    storeName = "";
    saveName = ""; // When empty, prompt for save name, otherwise overwrite existing
    money = 0;
    day = 1;
    month = 1;
    year = 1970;
    daysPassed = 0;

    hireEmployee(){
        this.emp = new Employee(1, "John Doe");
        return this.emp;
      }
    emp: Employee | null=null;
    
    fireEmployee(){
        this.emp = null;
    }
}
