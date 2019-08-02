var iResult ={
  success: true,
  terms: 'https://currencylayer.com/terms',
  privacy: 'https://currencylayer.com/privacy',
  timestamp: 1554310325,
  source: 'USD',
  quotes: { USDUSD: 1, USDKES: 100.701643 }

};

var usd = iResult.quotes.USDUSD;

var kes = iResult.quotes.USDKES;

console.log(usd + ` USD is equals to KES ` + kes );


