import { Game } from "./models/game";
import { GameBuilder } from "./game-builder";
import { Department } from "./models/department";

export class NewGameBuilder implements GameBuilder {
    setMoney(money: number): NewGameBuilder {
        this.game.store.money = money;
        return this;
    }

    setName(name: string): NewGameBuilder {
        this.game.store.name = name;
        return this;
    }

    setSqFt(sqFt: number) {
        this.game.store.sqFt = sqFt;
        return this;
    }

    addDepartment(department: Department): NewGameBuilder {
        this.game.store.addDepartment(department);
        return this;
    }

    build(): Game {
        this.game.store.updateUtilities();
        return this.game;
    }

    private game: Game = new Game();
}
