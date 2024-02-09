const newDate= new Date();
console.log(newDate.toLocaleString('default',{
    timeZone:"en-IN",

}));
console.log(newDate.toLocaleString('', { timeZone: 'UTC' }));

