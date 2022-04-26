import { Game } from "./game";
import { GameBuilder } from "./game-builder";

export class NewGameBuilder implements GameBuilder {
    setMoney(money: number): NewGameBuilder {
        this.game.store.money = money;
        return this;
    }

    setName(name: string): NewGameBuilder {
        this.game.store.name = name;
        return this;
    }

    /*addDepartment(department: Department): NewGameBuilder {
        this.departments.push(department);
    }*/

    build(): Game {
        this.game.store.updateUtilities();
        return this.game;
    }

    private game: Game = new Game();
}
