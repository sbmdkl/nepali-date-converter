import { START_ENGLISH_DATE } from './config';
import { currentDate } from './interfaces';
import evaluateNepaliDate from './utils/evaluateNepaliDate';

function todayDate() {
	const startDate = new Date(START_ENGLISH_DATE);
	const today = new Date();
	const daysDifference = Math.floor((today.getTime() - startDate.getTime()) / 86400000);
	return evaluateNepaliDate(daysDifference, false) as currentDate;
}

export default todayDate;
