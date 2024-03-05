// var filter = function(arr, fn) {
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(fn(arr[i],i)){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr
// };
// const arr = [0,10,20,30];

// function fn(n,i){
//     if(n>10){
//         return true
//     }else{
//         return false
//     }
// }

// const newArray = filter(arr, fn);
// console.log(newArray);


var reduce = function(nums, fn2sum, init) {
    let acc=init;
 if(nums.length<=0)   {
    return init;
 }else{
    for(let i=0;i<nums.length;i++){
         acc= fn2sum(nums[i],acc) 
        }
    return acc;
 }
}

const nums = [1,2,3,4];
const init=100;


// function fn2sum(singleValue,acc){
//     return singleValue+acc; 
// }
function fn2sum1(singleValue,acc){
   const mul=singleValue * singleValue;
   return  acc+mul; 
}
const result=reduce(nums,fn2sum1,init);
console.log(result);