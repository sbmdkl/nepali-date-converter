const { bs, AdDateSanitizer } = require('./config');
// const startNepaliDate = '1978-01-01';
const startEnglishDate = '1921-04-13';
function adToBs(adDate) {
	adDate = AdDateSanitizer(adDate);
	const startDate = new Date(startEnglishDate);
	const today = new Date(adDate);
	const daysDifference = Math.floor((today.getTime() - startDate.getTime()) / 86400000);
	if(daysDifference < 0) {
		throw new Error('Date out of range');
	}
	return evaluateNepaliDate(daysDifference);
}

function evaluateNepaliDate(daysElpased) {
	let currentYear = 0;
	let currentMonth = 0;
	let currentDay = 0;
	let totalD = 0;
	let flag = false;
	for (let i = 1978; i < 2100; i++) {
		if (flag) {
			break;
		}
		for (let j = 1; j <= 12; j++) {
			totalD += bs[i][j];
			if (daysElpased - totalD < 0) {
				currentDay = daysElpased - totalD + bs[i][j] + 1;
				flag = true;
				currentYear = i;
				currentMonth = j;
				break;
			}
		}
	}
  return `${currentYear}-${('0' + currentMonth).slice(-2)}-${('0' + currentDay).slice(-2)}`;
}

module.exports = adToBs;