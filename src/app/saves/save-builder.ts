import { Save } from "./save";

export interface SaveBuilder {
    build(json: object): Save;
}
