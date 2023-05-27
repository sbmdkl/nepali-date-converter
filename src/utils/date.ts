import Errors from '../constants/errors';

const formattedDate = (year: number, month: number, day: number) =>
	`${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`;

const splitDate = (date: string) => {
	const splittedDate = date.split('-');
	if (splittedDate.length !== 3) {
		throw new Error(Errors.DATE_FORMAT_INVALID);
	}
	return splittedDate.map(Number);
};

export { formattedDate, splitDate };
