const { bs, BsDateSanitizer } = require('./config');
const today = require('./today');

function ageCalculator(bsDate) {
	selectedDate = BsDateSanitizer(bsDate);
	const splittedDate = selectedDate.split('-');
	const year = parseInt(splittedDate[0]);
	const month = parseInt(splittedDate[1]);
	const day = parseInt(splittedDate[2]);

	const { currentYear, currentMonth, currentDay } = today();
	// validate user input date not exceed today
	if (
		year > currentYear ||
		(year === currentYear && month > currentMonth) ||
		(year === currentYear && month === currentMonth && day > currentDay)
	) {
		throw new Error('Date cannot be greater then today');
	}
	let ageDate = {
		year: 0,
		month: 0,
		day: bs[year][month] - day,
	};
	for (let i = year; i <= currentYear; i++) {
		if (i === year) {
			if (currentDay >= day) {
				ageDate.day = currentDay - day;
				if (currentMonth >= month) ageDate.month = currentMonth - month;
				else {
					ageDate.month = 12 - month + currentMonth;
					ageDate.year--;
				}
			} else {
				ageDate.day += currentDay;
				if (currentMonth > month) ageDate.month = currentMonth - month - 1;
				else {
					ageDate.month = 12 - month + currentMonth - 1;
					ageDate.year--;
				}
			}
		} else ageDate.year++;
	}
	return ageDate;
}

module.exports = ageCalculator;
