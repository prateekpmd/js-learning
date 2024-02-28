
// function User(name,age){
//         this.name=name;
//         this.age=age;
// }

// User.prototype.name=function(){
//     console.log(this.name);
// }

// const username=new User("pat",21);
// console.log(username.name());

//new and constructor ka propotype are linked togther
//1. if we create a functionName1.prototype.newfunction=function(){
    //
// }

//its added its funcitonName1,but untill and unless we dont use new functionName1 we cannot use the functions inside the prototype.


//1.constructor functions and proptotype


const hell={
    name:'prateek',
    age:22,
    printName:function(){
        console.log(`my name is ${this.name}`);
    }
}

Object.prototype.power=function(){
    console.log("my power is to kill");
};
console.log(hell);


const s='patrick';
s.prototype.printtt=function(){
    console.log("HELLO");
}