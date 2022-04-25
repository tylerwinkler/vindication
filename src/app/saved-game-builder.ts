import { Game } from "./game";
import { GameBuilder } from "./game-builder";
import { Save } from "./saves/save";

export class SavedGameBuilder implements GameBuilder {
    constructor(private save: Save) {}
    build(): Game {
        let g = new Game();
        g.storeName = this.save.storeName;
        g.saveName = this.save.saveName;
        g.money = this.save.money;
        g.day = this.save.day || 1;
        g.month = this.save.month || 1;
        g.year = this.save.year || 1970;
        g.daysPassed = this.save.daysPassed || 1;

        return g;
    }
}
