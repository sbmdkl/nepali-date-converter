import { formattedDate } from './date';

function evaluateEnglishDate(date: string, days: number): string {
  const [year, month, day] = date.split('-').map(Number);
  const utcDate = new Date(Date.UTC(year, month - 1, day));
  utcDate.setUTCDate(utcDate.getUTCDate() + days);
  const resultYear = utcDate.getUTCFullYear();
  const resultMonth = utcDate.getUTCMonth() + 1;
  const resultDay = utcDate.getUTCDate();
  return formattedDate(resultYear, resultMonth, resultDay);
}

export default evaluateEnglishDate;
