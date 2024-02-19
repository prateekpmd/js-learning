// const x={
//     email:"DCDCEWCWC@GMAIL.COM",
//     name:"prateek",
// }
// const key1= Symbol("1st");
// x[key1]="hellp";
// x[key1]="wiooo";
// console.log(x);

// // suppose to you to combine 2 objects then use const wow=  Object.assign({},obj,obj2)
// const obj2=[3,4];
// const obj=[1,2];
// const wow=  Object.assign({},obj2,obj); //imp or spread operator
// console.log(wow);

const obj4={
    name: "pat",
    age:32,
    area:"ANDHERI"
}
console.log(Object.keys(obj4)); //array of keys  [ 'name', 'age', 'area' ]
console.log(Object.values(obj4)); //array of values [ 'pat', 32, 'ANDHERI' ]

//convert object into arrayy Object.entries

console.log(Object.entries(obj4)) //[ [ 'name', 'pat' ], [ 'age', 32 ], [ 'area', 'ANDHERI' ] ]

console.log(obj4.hasOwnProperty('name'));

console.log(obj4.toLocaleString());
