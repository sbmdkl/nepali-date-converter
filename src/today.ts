import { currentDate } from './interfaces';
import evaluateNepaliDate from './utils/evaluateNepaliDate';

function todayDate() {
	const startDate = new Date('1921-04-13');
	const today = new Date();
	const daysDifference = Math.floor((today.getTime() - startDate.getTime()) / 86400000);
	return evaluateNepaliDate(daysDifference, false) as currentDate;
}

export default todayDate;
