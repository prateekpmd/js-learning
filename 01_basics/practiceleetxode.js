var map = function(arr, fn) {
    let newArrr=[];
    for(let i=0;i<arr.length;i++){
        newArrr.push(fn(arr[i]));
    }
    return newArrr;
};


const arr=[1,2,3]
const plusOne=(n)=>{
    return n+1
}
const newArray = map(arr, plusOne); // [2,3,4]
console.log(newArray);