//array are of two types 
// Continous,holey

// const xx=[1,2];

// console.log(xx.toString());

// const x=[1,2,3,4];

// for (const iterator of x) {
//     console.log(iterator)
//     console.log(iterator%2==0?`yes ${iterator} is even`:`no not ${iterator} is odd`);
// }

//NAN it's treated as a unique and distinct value.

// const compose = (functions) => {
//     return function (x){
//         return functions.reduceRight((acc,current)=>{
//             return current(acc);
//         },x)
//     }
// };


//   const fn = compose([x => x + 1, x => 2 * x])
//   fn(4) // 9
 

// function hola(...args){
//     console.log(...args)
//     console.log(arguments[1]);
// }

// hola(1,2,3)