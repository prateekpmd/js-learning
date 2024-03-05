const arr1=[1,2];
const arr2=[1,2];
// console.log(arr1==arr2);

//

// console.log([].join()==[]);
// console.log({}==true);

//In JavaScript, join() is a method that joins the elements of an array into a string. When you call join() on an array without passing any parameters, it joins the elements of the array using a comma as the separator by default.

//However, in the expression [].join(), there are no elements in the array to join, so the resulting string is empty. When you compare this empty string "" to an empty array [] using the equality operator ==, JavaScript performs type coercion, attempting to convert the operands to the same type for comparison.

//During this type coercion, both the empty string "" and the empty array [] are converted to a Boolean value. An empty string is considered falsy, and an empty array is also considered falsy in JavaScript. Therefore, both sides of the comparison evaluate to false, and the expression [].join() == [] returns true.

//This behavior might seem unintuitive at first, but it's a result of JavaScript's type coercion rules. It's generally recommended to use the strict equality operator === to avoid unexpected type coercion behavior.

// console.log(Math.floor(Math.PI));
// console.log(Math.round(Math.PI));
// console.log(Math.ceil(Math.PI));


// const maap= new Map();
// maap.set("IN","INDIA");
// maap.set("USA","UNITED STATES OF AMERICA");

// console.log(maap); //Map(2) { 'IN' => 'INDIA', 'USA' => 'UNITED STATES OF AMERICA' }

// for (const iterator in maap) {
//     console.log(iterator);
// }
// //or 
// for (const [iterator,vale] of maap) {
//     console.log(iterator,vale);
// }




for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    }(),4000);
}

function callback() {
    console.log(message);
  }
  
  var message = "hello world";
  
  setTimeout(callback, 1000);