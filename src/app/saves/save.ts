import { Department } from "../models/department";
import { Employee } from "../models/employee";

export interface Save { 
    version: number;
    saveName: string;
    storeName: string;
    money: number;
    day: number;
    month: number;
    year: number;
    daysPassed: number;
    lastPlayed: number;
    departments: Array<Department>;
    employees: Array<Employee>;
}
