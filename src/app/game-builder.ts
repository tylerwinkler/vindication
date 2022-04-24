import { Game } from "./game";

export interface GameBuilder {
    build(): Game;
}
