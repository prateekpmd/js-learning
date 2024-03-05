// const c=(functions)=>{
//     return (x)=>{
//        return functions.reverse().reduce((acc,currFunction)=>{
//                 return currFunction(acc);
//         },x)      
//     } 
// }
  
//     const fn = c([x => x + 1, x => 2 * x])
//     console.log(fn(4)) // 9


const compose = (functions) => {
    return functions.reduce((acc, fn) => {
      return (x) => {
        return acc(fn(x))
      };
    }, (x) => x);
  }

const returnedFunction=compose([x => x + 1, x => 2 * x]);


// const b=[];
// const v=b.reduce((acc,n)=>{
//     return acc+n
// },0);
// console.log(v)