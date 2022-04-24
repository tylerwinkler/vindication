import { MySave } from "./my-save";
import { MySaveBuilder } from "./my-save-builder";
import { Save } from "./save";
import { SaveReader } from "./save-reader";

export class LocalStorageSaveReader implements SaveReader {
    deserialize(): Save {
        let json = localStorage.getItem("save")!;
        let saveJson = JSON.parse(json);
        switch (saveJson.version) {
            case 1:
                return <MySave>saveJson;
            default:
                throw RangeError('Save version is not supported');
        }
    }
}
