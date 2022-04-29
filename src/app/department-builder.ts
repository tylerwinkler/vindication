import { Department } from "./models/department";

export class DepartmentBuilder {
    setName(name: string): DepartmentBuilder {
        this.department.name = name;
        return this;
    }

    setSqFt(sqFt: number): DepartmentBuilder {
        this.department.sqFt = sqFt;
        return this;
    }

    setShoppable(shoppable: boolean): DepartmentBuilder {
        this.department.shoppable = shoppable;
        return this;
    }
    
    build(): Department {
        return this.department;
    }

    department: Department = new Department();
}
