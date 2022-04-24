import { Save } from "./save";
import { SaveWriter } from "./save-writer";

export class LocalStorageSaveWriter implements SaveWriter {
    serialize(save: Save): boolean {
        localStorage.setItem('save', save.toString());
        return true;
    }
}
