import { Department } from "./department";

export class DepartmentBuilder {
    setName(name: string): DepartmentBuilder {
        this.department.name = name;
        return this;
    }

    setSqFt(sqFt: number): DepartmentBuilder {
        this.department.sqFt = sqFt;
        return this;
    }
    
    build(): Department {
        return this.department;
    }

    department: Department = new Department();
}
