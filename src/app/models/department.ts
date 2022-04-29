export class Department {
    name = "";
    sqFt = 0;
    shoppable = true;

    getMaxEmployeeSlots(): number {
        const EMPLOYEES_PER_SQFT = 1000;
        return Math.ceil(this.sqFt / EMPLOYEES_PER_SQFT);
    }

    getRevenue(): number {
        if (this.shoppable) return 60;
        else return 0;
    }
}
