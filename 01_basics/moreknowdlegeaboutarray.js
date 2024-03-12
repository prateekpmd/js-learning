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
// const c='q'
// const b=2;
// const a={
//     za:3,
//     pa:2
// }

// a[za]=3;
// a.hasOwnProperty("b")
// console.log(a);
// console.log(a.b);

//memoise
// function memoize(fn) {
//   let obj = {};
//   return function (...args) {
//     const [a, b] = [...args];
//     function holaa() {
//       for (const key in obj) {
//         if (key == a && obj[key] == b) {
//           return true;
//         }
//         return false;
//       }
//     }
//     let result = holaa();

//     if (!result) {
//       obj[a] = b;
//       return fn(a, b);
//     } else {
//         console.log(obj);
//         function ho() {
//             for (const key in obj) {
//               if (key == a && obj[key] == b) {
//                 return +key + +obj[key];
//               }
//             }
//           }
//           let result2= ho();
//           return result2;
//   };
// }
// }

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });
// console.log(memoizedFn(2, 3)); // 5
// console.log(memoizedFn(2, 3));
// console.log(callCount);
// console.log(memoizedFn(2, 1));
// console.log(memoizedFn(2, 1));
// console.log(callCount);


// function h(...args){
//     let obj={}
//     console.log(args);
//     const x= String(args);
//     obj[x]=4
//     console.log(x)
//     console.log(obj)
// }

// h(1,2);

function hola(fn){
    const catche={}
    return function(...args){
        const argsResult=String(args)
        if ( argsResult in catche) { //check
            return catche[argsResult]
        }
        // const result=fn(...args);
        const result = fn.apply(null, args);
        catche[argsResult]=result;
        return result;
    }
}
let check=0;
const finalResult=hola((x,y)=>{
    check=check+1;
    return x+y;
});
console.log(finalResult(2,1));
console.log(finalResult(2,1));
console.log(check);
console.log(finalResult(3,2));
console.log(finalResult(3,2));
console.log(check);

const x={
    name:"prateek",
    age:22
}

for (const key in x) {
    console.log(key);
}

