//var let const
//var is functional scope
//let and const are block scope {}

// {
//     let a=5;
// }
// console.log(a);


//variable shadowing 
// function wow(){
//     let a="prateek";

//     if(true){
//         let a= "Sumalini";
//         console.log(a);
//     }
//     console.log(a);
// }

// wow(); //SUMALINI 

// function wow(){
//     var a="prateek";

//     if(true){
//         var a= "Sumalini";
//         console.log(a);
//     }
//     console.log(a);
// }

// wow();//SUMALINI SUMALINI

//illegal shadowing
// function wow(){
//     var a="prateek";

//     if(true){
//         let a= "Sumalini";
//         console.log(a);
//     }
//     console.log(a);
// }

// wow(); // var and let works 

// function wow(){
//     let a="prateek";

//     if(true){
//         var a= "Sumalini";
//         console.log(a);
//     }
//     console.log(a);
// }

// wow();//error 