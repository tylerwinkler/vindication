import { Save } from "./save";

export class LocalStorageSaveManager {
    constructor(private storage: Storage) {}

    getSaveNames(): Array<string> {
        let array = new Array<string>();

        for (let i = 0; i < this.storage.length; ++i) {
            let saveName = this.storage.key(i);
            if (saveName && saveName.startsWith(LocalStorageSaveManager.SaveToken)) {
                let fixedName = saveName.substring(LocalStorageSaveManager.SaveToken.length);
                array.push(fixedName);
            }
        }

        return array;
    }

    getSaveCount(): number {
        return this.getSaveNames().length;
    }

    getSave(name: string): Save | null {
        let object = this.storage.getItem(LocalStorageSaveManager.SaveToken + name);
        if (!object) {
            return null;
        }

        let save = <Save>JSON.parse(object);

        if (save.saveName === "" || save.saveName === undefined) {
            save.saveName = name;
        }

        return save;
    }

    putSave(name: string, save: Save): void {
        this.storage.setItem(LocalStorageSaveManager.SaveToken + name, JSON.stringify(save));
    }

    deleteSave(save: Save): void {
        console.log('deleted ' + save.saveName);
        this.storage.removeItem(LocalStorageSaveManager.SaveToken + save.saveName);
    }

    private static SaveToken: string = 'saves/';
}
