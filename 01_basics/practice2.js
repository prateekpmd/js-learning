// function a(){
//     console.log("A");
//  function b(){
//     console.log("B");
//  }
//  return a;// call kar and then result in short youre calling it and returning 
// }

// const returnedValue=a();
// console.log(returnedValue);



function user (username,age,name){
    this.username=username;
    this.age=age;
    this.name=name

    this.logindetails=function(){
        console.log(`${this.username} ${this.age} ${this.name} `)
    }
}

const loginActivity= new user("vvv6969",21,"prateeek");
console.log(loginActivity.logindetails());