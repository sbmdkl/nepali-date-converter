import { BS, START_ENGLISH_DATE } from './config';
import { BsDateSanitizer } from './utils/dateSanitizer';
import evaluateEnglishDate from './utils/evaluateEnglishDate';

function bsToAd(selectedDate: string) {
	selectedDate = BsDateSanitizer(selectedDate);
	const splittedDate = selectedDate.split('-');
	const [year, month, day] = splittedDate.map(Number);

	let daysDiff = 0;
	for (let i = 1978; i <= year; i++) {
		if (i === year) {
			for (let j = 1; j < month; j++) {
				daysDiff += BS[i][j];
			}
			daysDiff += day - 1;
		} else {
			for (let j = 1; j <= 12; j++) {
				daysDiff += BS[i][j];
			}
		}
	}
	return evaluateEnglishDate(START_ENGLISH_DATE, daysDiff);
}

export default bsToAd;
