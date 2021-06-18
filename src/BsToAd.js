const { bs, BsDateSanitizer } = require('./config');
// const startNepaliDate = '2000-01-01';
const startEnglishDate = '1943-04-14';

function bsToAd(selectedDate) {
	selectedDate = BsDateSanitizer(selectedDate);
	const splittedDate = selectedDate.split('-');
	const year = parseInt(splittedDate[0]);
	const month = parseInt(splittedDate[1]);
	const day = parseInt(splittedDate[2]);
	let daysDiff = 0;
	for (let i = 2000; i <= year; i++) {
		if (i === year) {
			for (let j = 1; j < month; j++) {
				daysDiff += bs[i][j];
			}
			daysDiff += day - 1;
		} else {
			for (let j = 1; j <= 12; j++) {
				daysDiff += bs[i][j];
			}
		}
	}
	return evaluateEnglishDate(startEnglishDate, daysDiff);
}

function evaluateEnglishDate(date, days) {
	var result = new Date(date);
	result.setDate(result.getDate() + days);
	const year = result.getFullYear();
	const month = result.getMonth() + 1;
	const day = result.getDate();
	return `${year}-${month > 9 ? month : '0' + month}-${day > 9 ? day : '0' + day}`;
}

module.exports = bsToAd;