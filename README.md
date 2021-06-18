# @sbmdkl/nepali-date-converter

[![NPM](https://img.shields.io/npm/v/@sbmdkl/nepali-date-converter.svg)](https://www.npmjs.com/package/@sbmdkl/nepali-date-converter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A javascript package to convert nepali date BS (Bikram Sambat) to AD and vice-versa.

## Installation

```bash
npm install @sbmdkl/nepali-date-converter
```

## Usage

```jsx
const { adToBs, bsToAd } = require('@sbmdkl/nepali-date-converter');
try {
  const bsDate = adToBs('2078-03-05');
  console.log(bsDate);

} catch (e) {
  console.log(e.message)
}
```

## Available Methods
<pre>
adToBs('YYYY-MM-DD') - convert AD to BS date
bsToAd('YYYY-MM-DD') - convert BS to AD date
</pre>

## dateFormat
Format the date to provide various output based on format string

<pre>
YYYY - 4 digit of year (2078)
MM   - month number with 0 padding - (01-12)
DD   - Day of Month with zero padding (01-32)
</pre>

## Date Range
>Date convert will works between these Date Range:

Date Range for English Date : 1921 AD to 2040 AD

Date Range for Nepali Date : 1978 BS to 2099 BS


## License

MIT © [Shubham Dhakal](https://github.com/sbmdkl)