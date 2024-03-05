




function mad(z){
    const [func1,func2]=z;
    // console.log(func1(4));
    // console.log(func2(3));


    return function(x){
        const wz=func2(x)
        const za= func1(wz);
        return wz+za;
    }

    
}

const result=mad([(x)=>x+1,(y)=>y+1]);
console.log(result(2));