interface BSArray {
    [year: number]: [year: number, ...days: number[]];
}
interface currentDate {
    currentYear: number;
    currentMonth: number;
    currentDay: number;
}
interface date {
    year: number;
    month: number;
    day: number;
}
export type { BSArray, currentDate, date };
