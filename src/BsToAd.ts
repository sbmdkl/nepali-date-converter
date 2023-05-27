import { BS, DATES, START_ENGLISH_DATE } from './config';
import { splitDate } from './utils/date';
import { BsDateSanitizer } from './utils/dateSanitizer';
import evaluateEnglishDate from './utils/evaluateEnglishDate';

function bsToAd(selectedDate: string) {
	selectedDate = BsDateSanitizer(selectedDate);
	const [year, month, day] = splitDate(selectedDate);

	let daysDiff = 0;
	for (let i = DATES.MIN_YEAR_BS; i <= year; i++) {
		if (i === year) {
			for (let j = DATES.MIN_MONTH; j < month; j++) {
				daysDiff += BS[i][j];
			}
			daysDiff += day - 1;
		} else {
			for (let j = DATES.MIN_MONTH; j <= DATES.MAX_MONTH; j++) {
				daysDiff += BS[i][j];
			}
		}
	}
	return evaluateEnglishDate(START_ENGLISH_DATE, daysDiff);
}

export default bsToAd;
