//JAVASCRIPT IS A PROTOTYPE BASED LANGUAGE :
function User(name,age){
        this.name=name;
        this.age=age;
}

User.prototype.name=function(){
    console.log(this.name);
}

const username=new User("pat",21);
console.log(username.name());

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
String.prototype.printtt=function(){
    console.log("HELLO");
}

console.log(s.printtt());

//__PROTO__ (inheritance) old syntax

const human={
    name:"Prateek"
}

const dj={
    stagename:"ILLICIT",
    __proto__:human
}
console.log(dj.name);


//mordern syntax Object.setPrototypeOf
const humann={
    name:"Prateek"
}

const djj={
    stagename:"ILLICIT",
}
console.log(djj.name);

Object.setPrototypeOf(djj,humann) //(child,parent)
console.log(dj.name);

//creating your own custum prototype method 
let myname="hitesh   ";
// const xc=myname.toUpperCase();
Object.prototype.trueLength=function(){
    console.log(this);
    console.log(this.trim().toUpperCase());
}

myname.trueLength();

let mynamee=[2,3,4];
// const xc=myname.toUpperCase();
Object.prototype.trueLength=function(){
    console.log(this[0]);
    this[0]=22222;
    console.log(this[0]);
}

mynamee.trueLength();

