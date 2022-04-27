import { Game } from "./models/game";

export interface GameBuilder {
    build(): Game;
}
