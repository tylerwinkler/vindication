export class Department {
    name = "";
    sqFt = 0;

    getMaxEmployeeSlots(): number {
        const EMPLOYEES_PER_SQFT = 1000;
        return Math.ceil(this.sqFt / EMPLOYEES_PER_SQFT);
    }

    getRevenue(): number {
        return 60;
    }
}
