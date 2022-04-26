import { Employee } from "./employee";

class FinancialLineItem {
    constructor(name: string, value: number) {this.name = name; this.value = value;}
    name: string = "";
    value: number = 0;
}

class Store {
    constructor() {
        this.finances.push(new FinancialLineItem("Utilities", 0));
    }

    processEndOfMonth() {
  
    }

    processEndOfWeek() {
 
    }

    hireEmployee() {
        this.employees.push(new Employee(1, "John Doe"));
        return this.employees[this.employees.length - 1];
    }
    
    fireEmployee(emp: Employee) {
        this.employees.splice(this.employees.findIndex(e => e.id === emp.id), 1);
    }

    getFinances(): Array<FinancialLineItem> {
        return this.finances;
    }

    calculateUtilities(): number {
        return this.floorSpace * -3;
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
        this.floorSpace += sqFt;
        this.updateUtilities();
    }

    name = ""; // Name of store
    money = 0; // Money available to store
    debt = 0; // LOANSMART wants their money back

    floorSpace = 1000;

    finances = new Array<FinancialLineItem>();
    
    employees = new Array<Employee>();
}

export {Store, FinancialLineItem}