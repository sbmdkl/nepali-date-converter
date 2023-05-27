import { BS } from '../config';
import { currentDate } from '../interfaces';
import { formattedDate } from './date';

function evaluateNepaliDate(daysElpased: number, format = true): string | currentDate {
	let currentYear = 0;
	let currentMonth = 0;
	let currentDay = 0;
	let totalD = 0;
	let flag = false;
	for (let i = 1978; i < 2100; i++) {
		if (flag) {
			break;
		}
		for (let j = 1; j <= 12; j++) {
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
