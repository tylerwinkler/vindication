import { Game } from "./game";
import { GameBuilder } from "./game-builder";

export class NewGameBuilder implements GameBuilder{
    build(): Game {
        let g = new Game();
        g.money = NewGameBuilder.StartingMoney;

        return g;
    }

    private static StartingMoney = 1000000; // One million
}
