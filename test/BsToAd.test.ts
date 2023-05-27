const { bsToAd } = require('../dist/@sbmdkl/nepali-date-converter.umd.js');

describe('Age Calculator', () => {
	test('Case I', () => {
		expect(bsToAd('2054-11-16')).toBe('1998-02-28');
	});
	test('Case II', () => {
		expect(bsToAd('2054-11-17')).toBe('1998-03-01');
	});
});
