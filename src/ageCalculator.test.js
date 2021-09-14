const { calculateAge } = require('./index');

describe('Age Calculator', () => {
	test('Case I', () => {
		expect(calculateAge('2078-03-10')).toEqual({ year: 0, month: 2, day: 19 });
	});
	test('Case II', () => {
		expect(calculateAge('2078-03-29')).toEqual({ year: 0, month: 2, day: 0 });
	});
	test('Case III', () => {
		expect(calculateAge('2077-03-25')).toEqual({ year: 1, month: 2, day: 4 });
	});
	test('Case IV', () => {
		expect(calculateAge('2077-06-25')).toEqual({ year: 0, month: 11, day: 4 });
	});
	test('Case V', () => {
		expect(calculateAge('2077-06-29')).toEqual({ year: 0, month: 11, day: 0 });
	});
	test('Case VI', () => {
		expect(calculateAge('2077-05-25')).toEqual({ year: 1, month: 0, day: 4 });
	});
	test('Case VII', () => {
		expect(calculateAge('2077-06-28')).toEqual({ year: 0, month: 11, day: 1 });
	});
	test('Case VIII', () => {
		expect(calculateAge('2054-05-29')).toEqual({ year: 24, month: 0, day: 0 });
	});
	test('Case IX : Greater Date ', () => {
		expect(() => calculateAge('2078-08-29')).toThrow('Date cannot be greater then today');
	});
	test('Case X : Today date ', () => {
		expect(calculateAge('2078-05-29')).toEqual({ year: 0, month: 0, day: 0 });
	});
});
