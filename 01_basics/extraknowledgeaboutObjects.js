// const chai={
//     name:"prateeek",
//     age:22,
//     address:"Andheri"
// }

// const value=Object.getOwnPropertyDescriptor(chai,"name");
// console.log(value);

// const result=Object.defineProperty(chai,"name",{
//     writable: false,
// });
// console.log(result); 

// chai.name="sumalini";

// console.log(result); 

const chai={
    name:"prateeek",
    age:22,
    address:"Andheri"
}

const value=Object.getOwnPropertyDescriptors(chai)
console.log(value);

const result=Object.defineProperties(chai,{
    name: {
      writable: false,
    },
    age: {
        writable: false,
      },
      address: {
        writable: false,
      },
  })
console.log(result);
chai.address="no where";
chai.age=1;
chai.name="no one";
console.log(chai);