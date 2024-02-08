"use strict"; //treat all js code as newer version of JS

// PRIMITIVE

//REFERENCE
 
//In dynamically typed languages all type checks are performed in a runtime, only when your program is executing. So this means you can just assign anything you want to the variable and it will work.
//let a
a = 0
console.log(a) // 0
a = 'Hello world'
console.log(a) // Hello world
a = { 'key': 'value' }
console.log(a) // {key:'value'}

//If we take a look at Typescript, it is a statically typed language, so all checks will be performed during compile/build run before we actually execute our program.