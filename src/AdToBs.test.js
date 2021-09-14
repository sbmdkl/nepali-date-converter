const { adToBs } = require('./index');

describe('Age Calculator', () => {
	test('Case I', () => {
		expect(adToBs('1998-02-28')).toBe('2054-11-16');
	});
	test('Case II', () => {
		expect(adToBs('1998-03-01')).toBe('2054-11-17');
	});
});
