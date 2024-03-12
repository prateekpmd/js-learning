var chunk = function(arr, size) {
    let sizeR=size
    const arrResult=[];
    let inner=[];
    for (let index = 0; index < arr.length;) {

            for ( let i= index; i < sizeR; i++) {
                if(arr[i]==undefined){
                    break;
                }
                inner.push(arr[i])
            }
            arrResult.push(inner);
            inner=[];
            index=index+size; //2//4
            sizeR=sizeR+size;//4//6
    }
   return arrResult
}

console.log(chunk([1,2,3,4,5,6,7],3));

//slice
//splice