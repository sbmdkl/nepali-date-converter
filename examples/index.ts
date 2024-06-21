const { adToBs, bsToAd, calculateAge } = require('../dist/@sbmdkl/nepali-date-converter.umd.js');
try {
	console.log(adToBs('2024-06-14'));
	console.log(calculateAge('2070-10-15'));
} catch (e) {
	console.log(e.message);
}
