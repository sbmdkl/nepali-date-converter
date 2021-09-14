function evaluateEnglishDate(date, days) {
	var result = new Date(date);
	result.setDate(result.getDate() + days);
	const year = result.getFullYear();
	const month = result.getMonth() + 1;
	const day = result.getDate();
	return `${year}-${month > 9 ? month : '0' + month}-${day > 9 ? day : '0' + day}`;
}

module.exports = evaluateEnglishDate;
