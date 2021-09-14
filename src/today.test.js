const today = require('./today');

describe('Today Date', () => {
	test('Case I', () => {
		expect(today()).toEqual({ currentYear: 2078, currentMonth: 5, currentDay: 29 });
	});
});
