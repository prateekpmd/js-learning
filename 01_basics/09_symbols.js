// const length=Symbol("length")
// class Train{
//     constructor(){
//         this[length]=0;
//     }
//     add (car,contents){
//         this[car]=contents;
//         this[length]++;
//     }
// }

// const wow= new Train();
// wow.add("Work","LAMBO");
// wow.add("College","URUS");
// wow.add("Work-Out","LCYCLE");

// console.log(wow);

// for (x in wow){
//     console.log(x,wow[x]);
// } // when we loop over the object symbols are not really included. we have to ,mamually do it. 
// //Object.getOwnPropertySymbols(wow);


const sss1= Symbol("1st");
const c=Symbol();

const xar=19919;
const x={
    a:12,
    b:11,
};
x[c]=17;
x["wow"]=1;
x.xar=xar;
console.log(x);