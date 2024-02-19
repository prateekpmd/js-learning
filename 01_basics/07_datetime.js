const newDate= Date.now();
console.log(newDate.toLocaleString('default',{ //The toLocaleString() method returns a Date object as a string, using locale settings.
    timeZone:"en-US",

}));
console.log(newDate.toLocaleString('', { timeZone: 'UTC' }));
const wow= new Intl.RelativeTimeFormat();
console.log(wow); 

// singluar plural (1st 2nd 3rd)
const formatter =new Intl.PluralRules("en-US",{ type: "ordinal" });

// console.log(formatter.select(3)); //check mdn 


//number Formatter ()
const forma=new Intl.NumberFormat(undefined,{currency:'USD',style:"currency"}); //currency:'USD',"EUR"
console.log(forma.format(1200));

const formaz=new Intl.NumberFormat(undefined,{style:"unit",unit:"liter",unitDisplay:'narrow'});
console.log(formaz.format(1212));

const formazz=new Intl.NumberFormat(undefined,{notation:'compact'});
console.log(formazz.format(1212898989));

//tiume formatter
const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'short' });

console.log(rtf1.format(-3, 'hours'));// Expected output: "in 3 qtrs."

//DateTimeFormat
const gmf= new Intl.DateTimeFormat(undefined,{month:"long"})

console.log(gmf.format());