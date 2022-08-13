import { Department } from "./department";
import { Employee } from "./employee";

class FinancialLineItem {
    constructor(name: string, value: number) {this.name = name; this.value = value;}
    name: string = "";
    value: number = 0;
}

class Store {
    constructor() {
        this.finances.push(new FinancialLineItem("Utilities", 0));
        this.finances.push(new FinancialLineItem("Wages", 0));
    }

    processEndOfMonth() {
  
    }

    processEndOfWeek() {
 
    }

    hireEmployee(employee: Employee) {
        if (this.getEmployeeLimit() <= this.employees.length) {
            return false;
        }

        employee.id = this.generateEmployeeId();

        this.employees.push(employee);
        this.updateFinancialItem(new FinancialLineItem("Wages", -this.getEmployeeExpense()), true);
        return true;
    }

    generateEmployeeId(): number {
        return Math.ceil(Math.random() * 1000000) + 1000000;
    }
    
    fireEmployee(emp: Employee) {
        this.employees.splice(this.employees.findIndex(e => e.id === emp.id), 1);
        this.updateFinancialItem(new FinancialLineItem("Wages", -this.getEmployeeExpense()), true);
    }

    getFinances(): Array<FinancialLineItem> {
        return this.finances;
    }

    calculateUtilities(): number {
        return this.sqFt * -3;
    }

    // Updates the line item when the store size changes
    updateUtilities(): void {
        this.finances.find(e => e.name === "Utilities")!.value = this.calculateUtilities() / 30;
    }

    hasFinancialItem(item: FinancialLineItem): boolean {
        return this.finances.find(e => e.name === item.name) !== undefined;
    }

    insertFinancialItem(item: FinancialLineItem): void {
        this.finances.push(item);
    }

    updateFinancialItem(item: FinancialLineItem, replace?: boolean): void {
        let foundItem = this.finances.find(e => e.name === item.name);
        if (foundItem) {
            if (replace) {
                foundItem.value = item.value;
            }
            else {
                foundItem.value += item.value;
            }
        }
    }

    removeFinancialItem(item: FinancialLineItem): void {
        this.finances.splice(this.finances.findIndex(e => e.name === item.name), 1);
    }

    addSqFt(sqFt: number) {
        this.sqFt += sqFt;
        this.updateUtilities();
    }

    addDepartment(dept: Department) {
        this.departments.push(dept);
        if (dept.shoppable)
        this.finances.push(new FinancialLineItem(dept.name, dept.getRevenue()));
    }

    getEmployeeLimit(): number {
        return Math.ceil(this.sqFt / 1000);
    }

    // Returns the positive value of the employee wage expense
    getEmployeeExpense(): number {
        let revenue = 0;
        for (let d of this.departments) {
            revenue += d.getRevenue();
        }

        return Math.floor(revenue * 0.0003 * this.employees.length * 100) / 100;
    }

    name = ""; // Name of store
    money = 0; // Money available to store
    debt = 0; // LOANSMART wants their money back

    sqFt = 1000;

    finances = new Array<FinancialLineItem>();
    
    employees = new Array<Employee>();

    departments = new Array<Department>();
}

export {Store, FinancialLineItem}