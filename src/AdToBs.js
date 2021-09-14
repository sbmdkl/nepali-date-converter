const { AdDateSanitizer } = require('./config');
const evaluateNepaliDate = require('./utils/evaluateNepaliDate');
// const startNepaliDate = '1978-01-01';
const startEnglishDate = '1921-04-13';
function adToBs(adDate) {
	adDate = AdDateSanitizer(adDate);
	const startDate = new Date(startEnglishDate);
	const today = new Date(adDate);
	const daysDifference = Math.floor((today.getTime() - startDate.getTime()) / 86400000);
	if (daysDifference < 0) {
		throw new Error('AD Date out of range');
	}
	return evaluateNepaliDate(daysDifference);
}

module.exports = adToBs;
