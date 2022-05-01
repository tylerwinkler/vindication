import { Game } from "./models/game";
import { GameBuilder } from "./game-builder";
import { Save } from "./saves/save";
import { DepartmentBuilder } from "./department-builder";

export class SavedGameBuilder implements GameBuilder {
    constructor(private save: Save) {}
    build(): Game {
        let g = new Game();
        g.store.name = this.save.storeName;
        g.saveName = this.save.saveName;
        g.store.money = this.save.money;
        g.day = this.save.day;
        g.month = this.save.month;
        g.year = this.save.year;
        g.daysPassed = this.save.daysPassed;
        g.store.employees = this.save.employees;

        for (let d of this.save.departments) {
            g.store.departments.push(new DepartmentBuilder()
                .setName(d.name)
                .setShoppable(d.shoppable)
                .setSqFt(d.sqFt)
                .build());
        }

        console.log(g.store.departments);

        g.store.updateUtilities();

        return g;
    }
}
