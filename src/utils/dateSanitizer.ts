import { BS, DATES } from '../config';
import { date } from '../interfaces';
import Errors from '../constants/errors';
import { formattedDate, splitDate } from './date';

function dateSanitizer(date: string): date {
	const [year, month, day] = splitDate(date);

	if (day > DATES.MAX_DAY || day < DATES.MIN_DAY || !day) {
		throw new Error(Errors.INVALID_DAY);
	}

	if (month > DATES.MAX_MONTH || month < DATES.MIN_MONTH || !month) {
		throw new Error(Errors.INVALID_MONTH);
	}

	if (!year || year.toString().length !== DATES.YEAR_LENGTH) {
		throw new Error(Errors.INVALID_YEAR);
	}
	return { year, month, day };
}

function AdDateSanitizer(date: string): string {
	const { year, month, day } = dateSanitizer(date);

	if (year > DATES.MAX_YEAR_AD) {
		throw new Error(Errors.AD_DATE_OUT_OF_RANGE);
	}

	if (month > DATES.MAX_MONTH_AD) {
		throw new Error(Errors.INVALID_MONTH);
	}

	return formattedDate(year, month, day);
}

function BsDateSanitizer(date: string): string {
	const { year, month, day } = dateSanitizer(date);
	if (year < DATES.MIN_YEAR_BS || year > DATES.MAX_YEAR_BS) {
		throw new Error(Errors.BS_DATE_OUT_OF_RANGE);
	}
	if (day > BS[year][month]) {
		throw new Error(`No ${day} day exits in this month.`);
	}
	return formattedDate(year, month, day);
}
export { AdDateSanitizer, BsDateSanitizer };
