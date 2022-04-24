import { Save } from "./save";

export interface SaveWriter {
    serialize(save: Save): boolean;
}
