import Errors from './constants/errors';
import { START_ENGLISH_DATE } from './config';
import { AdDateSanitizer } from './utils/dateSanitizer';
import evaluateNepaliDate from './utils/evaluateNepaliDate';

function adToBs(adDate: string) {
	adDate = AdDateSanitizer(adDate);
	const startDate = new Date(START_ENGLISH_DATE);
	const today = new Date(adDate);
	const daysDifference = Math.floor((today.getTime() - startDate.getTime()) / 86400000);
	if (daysDifference < 0) {
		throw new Error(Errors.AD_DATE_OUT_OF_RANGE);
	}
	return evaluateNepaliDate(daysDifference);
}

export default adToBs;
