import { Save } from "./save";

export interface SaveReader {
    deserialize(): Save;
}
