//prom


// var timeLimit = function(fn, t) {
//     return async function(...args) {
//         return new Promise((resolve, reject) => {
//             let timerId;

//             fn(...args) //150ms
//                 .then(result => {
//                     resolve(result);
//                 })
//                 .catch(error => {
//                     reject("wow");
//                 }).finally(() => {
//                     clearTimeout(timerId);
//                 });

//             timerId = setTimeout(() => {
//                 reject('Time Limit Exceeded');
//             }, t);//100
//         });
//     };
// };


//   const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
//   limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms


const data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(4);
    })
});
const x=data.then(value);
x.then((item)=>{
    console.log(item);
})