const { bs, BsDateSanitizer } = require('./config');
const evaluateEnglishDate = require('./utils/evaluateEnglishDate');
// const startNepaliDate = '1978-01-01';
const startEnglishDate = '1921-04-13';

function bsToAd(selectedDate) {
	selectedDate = BsDateSanitizer(selectedDate);
	const splittedDate = selectedDate.split('-');
	const year = parseInt(splittedDate[0]);
	const month = parseInt(splittedDate[1]);
	const day = parseInt(splittedDate[2]);
	let daysDiff = 0;
	for (let i = 1978; i <= year; i++) {
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

module.exports = bsToAd;
