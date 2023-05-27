import { formattedDate } from './date';

function evaluateEnglishDate(date: string, days: number): string {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	const year = result.getFullYear();
	const month = result.getMonth() + 1;
	const day = result.getDate();
	return formattedDate(year, month, day);
}

export default evaluateEnglishDate;
