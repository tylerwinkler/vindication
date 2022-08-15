export class ResearchItem {
    prerequisitesMet(): boolean {
        if (this.prerequisites.length === 0) {
            return true;
        }

        // Create a list of any prereqs that are not researched. If more than 0, then prereqs are not met.
        return this.prerequisites.filter((prereq) => !prereq.researched).length === 0;
    }

    name: string = "";
    researched: boolean = false;

    prerequisites: Array<ResearchItem> = new Array<ResearchItem>();
}