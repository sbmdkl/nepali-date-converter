const formattedDate = (year: number, month: number, day: number) =>
	`${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`;

export { formattedDate };
