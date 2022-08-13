import {environment} from "../../environments/environment"

export class Calendar {
    constructor() {
        this._today = environment.storeStartDate;
    }

    advanceDay(): void {
        this._today.setDate(this._today.getDate() + 1);
    }

    isNewWeek(): boolean {
        return this._today.getDay() === Calendar.WEEKDAY_SUNDAY;
    }

    isNewMonth(): boolean {
        return this._today.getDate() === Calendar.FIRST_DAY_OF_MONTH;
    }

    isNewYear(): boolean {
        return this._today.getMonth() === Calendar.MONTH_JANUARY
        && this.isNewMonth();
    }

    today(): Date {
        return this._today;
    }

    /*addHoliday(holidayName: string, date: Date) {
        this._holidays.push({
            name: holidayName,
            date: date
        });
    }

    isHoliday*/

    private _today: Date;
    //private _holidays: object[] = [];

    private static readonly MONTH_JANUARY = 0;
    private static readonly WEEKDAY_SUNDAY = 0;
    private static readonly FIRST_DAY_OF_MONTH = 1;
}
