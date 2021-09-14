const { bs } = require('../config');

function evaluateNepaliDate(daysElpased, format = true) {
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
	if (format)
		return `${currentYear}-${('0' + currentMonth).slice(-2)}-${('0' + currentDay).slice(-2)}`;
	else return { currentYear, currentMonth, currentDay };
}

module.exports = evaluateNepaliDate;
