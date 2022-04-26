import { Game } from "./game";
import { GameBuilder } from "./game-builder";

export class NewGameBuilder implements GameBuilder {
    setMoney(money: number): NewGameBuilder {
        this.money = money;
        return this;
    }

    setName(name: string): NewGameBuilder {
        this.storeName = name;
        return this;
    }

    build(): Game {
        let g = new Game();
        g.money = this.money;
        g.storeName = this.storeName;

        return g;
    }

    money: number = 0;
    storeName: string = "The Store With No Name";
}
