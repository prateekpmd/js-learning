//crazy example
//call() is to specify what the variable " this " refers to
//its all about this
//2 use case
//1. function calling inside function and this ka refernce (Call stack example)
//2. object can use a method belonging to another object 

function setUsername(username){
    this.username=username;
    console.log("setusername is called")
}

function setUser(username,age,name){
    setUsername.call(this,username); //"this" over here holdd the refernce of setUSer as setUSername after execution goes away, kyunki mei gayab horaha hu abh mere saamaan aapke
    this.age=age;
    this.name=name;
}
const chai=new setUser("patrickviera9",17,"prateek");
console.log(chai);

//using call an object can use a method belonging to another object,where the vairbale this refers to 
const pat={
    username:"prateek",
    hobby:function(age){
        console.log(`${this.username}'s hobby is ${age}`)
    }
}

const shivam={
    username:"shivam"
}

const vvv=pat.hobby.call(shivam,12);
console.log(vvv)
console.log(shivam);