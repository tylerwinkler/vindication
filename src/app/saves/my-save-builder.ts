import { MySave } from "./my-save";
import { Save } from "./save";
import { SaveBuilder } from "./save-builder";

export class MySaveBuilder implements SaveBuilder {
    build(json: object): Save {
        let mySave = new MySave();
        //mySave.money = json['money'];
        return mySave;
    }
}
