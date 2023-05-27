import { BS, DATES } from '../config';
import { currentDate } from '../interfaces';
import { formattedDate } from './date';

function evaluateNepaliDate(daysElpased: number, format = true): string | currentDate {
	let currentYear = 0;
	let currentMonth = 0;
	let currentDay = 0;
	let totalD = 0;
	let flag = false;
	for (let i = DATES.MIN_YEAR_BS; i <= DATES.MAX_YEAR_BS; i++) {
		if (flag) {
			break;
		}
		for (let j = DATES.MIN_MONTH; j <= DATES.MAX_MONTH; j++) {
			totalD += BS[i][j];
			if (daysElpased - totalD < 0) {
				currentDay = daysElpased - totalD + BS[i][j] + 1;
				flag = true;
				currentYear = i;
				currentMonth = j;
				break;
			}
		}
	}
	if (format) return formattedDate(currentYear, currentMonth, currentDay);
	else return { currentYear, currentMonth, currentDay };
}

export default evaluateNepaliDate;
