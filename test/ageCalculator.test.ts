const { calculateAge } = require('../dist/@sbmdkl/nepali-date-converter.umd.js');

describe('Age Calculator', () => {
	test('Case I', () => {
		expect(calculateAge('2080-01-13')).toEqual({ year: 0, month: 1, day: 0 });
	});
	test('Case II', () => {
		expect(calculateAge('2054-07-15')).toEqual({ year: 25, month: 6, day: 28 });
	});
	test('Case III', () => {
		expect(calculateAge('2054-02-13')).toEqual({ year: 26, month: 0, day: 0 });
	});
	test('Case IV : Greater Date ', () => {
		expect(() => calculateAge('2080-02-14')).toThrow('Date cannot be greater then today');
	});
	test('Case V : Today date ', () => {
		expect(calculateAge('2080-02-13')).toEqual({ year: 0, month: 0, day: 0 });
	});
});
