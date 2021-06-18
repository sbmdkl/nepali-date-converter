const { adToBs, bsToAd } = require('../src');
try {
  console.log(adToBs('2016-02-15'))
} catch (e) {
  console.log(e.message)
}