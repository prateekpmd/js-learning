"use strict";
const ps=require('prompt-sync');
const prompt=ps();
// // this inside global space
// //  reference variable that refers to the current object.
// console.log(this); // this inside global space returns a global object (window object) and in node {}

// // this inside a function

// function help() {
//   console.log(this); // So in function scope in strict mode the value of this is undefined, and in non strict mode the value is taken as global scope because it use something called as " this substitution ",so ever if the value of this is null or undefined it replaces the value with the global object
// }
// help();
// //this keywoad value depends on how the function is called
// //help() ---> undefined in strict node & global object in non strict node
// //window.help() ---> in strict mode it displays global object, because the window referws to the calling object thats why

// const xx = {
//   a: "chicken",
//   c: function () {
//     console.log(this);
//   },
// };
// xx.c();

// //"inorder to override the value of this" we use 3 methods call,apply,bind
// //object.function.call(this,args,args);
// //object.function.apply(this,[args,args]);

// const student = {
//   name: "patty",
//   printname: function () {
//     console.log(this.name);
//   },
// };
// const student2 = {
//   name: "cdeeeeee",
// };
// student.printname.call(student2);

// //bind is very similar to call but the only diffrence is it bind the function to the object returns a function unline call where it calls it dorectly

// const student3 = {
//     name: "rohan",
//   };
//  const aaaaa= student.printname.bind(student3);
// aaaaa();

// // this inside arrow function
// const name="wtf";
// const studentt9 = {
//     name: "patty",
//     printname: function () {
//      const xxx=()=>{
//         console.log(this);
//      }
//       xxx();
//     },
//   };

//   studentt9.printname(); // this means that arroe function doesnt have their own this.
//   // so it takes the "enclosing lexical context"
//   // which is global scope 
//   // so the above example behaves like console.log(this) written in global context.
//   //imp"  how this keyword will behave inside enclosing lexcial context ?"" ill get my answer


//   //When you call a function with no execution context, the value of this will be the global object, in this case window.
//   const studentt = {
//     name: "patty",
//     printname: function () {
//       function xxx(){
//         console.log(this); // global
//       }
//       xxx();
//     },
//   };

//   studentt.printname(); 
  

//   // if it has 2 arrow functions

//   const aqaq= ()=>{
//     const ok=()=>{
//         console.log(this);
//     }
//     ok();
//   }
//   aqaq(); // global object 

//   // 2 normal function

//   const x=function(){
//     const y=function(){
//         console.log(this)
//     }
//     y();
//   }

//   x(); //global

//   /// two arrow functions

//   const studenttjhartt = {
//     name: "patty",
//     printname: ()=> {
//         //console.log(this);
//       const xxx=()=>{
//         console.log(this); 
//       }
//       xxx();
//     },
//   };

//   studenttjhartt.printname(); 

// //

// const studenttjharttt6 = {
//     name: "patty",
//     printname: () => {
//         console.log(this);
//     }
//   };

//   studenttjharttt6.printname();  


// //
// const studenttjharttt = {
//     name: "patty",
//     printname: function() {
//         console.log(this);
//     }
//   };

//   studenttjharttt.printname();    //how the function is called ? object.function()






//   //how the function is called ? object.function()
//   //how this behaves inside the enclosing lexical context ?


// this.name="wtf";
// const studentt9 = {
//     name: "patty",
//     printname: function(){
//         console.log(this.name);
//     },
//   };

//   setTimeout(function(){
//     studentt9.printname();
//   }
//   ,1000);


// let calculator ={
//     read(){
//        this.a= prompt("a=",0);
//        this.b= prompt("b=",0);
//     },
//     sum(){
//         console.log(+this.a+(+this.b));
//     },
//     multiply(){
//         console.log(this.a * this.b);
//     }
// };

// calculator.read(); // will read 2 values from the user 
// calculator.sum();
// calculator.multiply();


//implicit return means dont have to write return but 
const v=(a,b)=>a+b;

const cv=v(1,2);

console.log(cv);