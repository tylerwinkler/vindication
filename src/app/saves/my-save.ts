import { Save } from "./save";

export class MySave implements Save {
    toString(): string {
        return JSON.stringify({
            version: this.version,
            money: this.money
        });
    }

    version: number  = 1;

    money: number = 0;
}
