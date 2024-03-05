// //classes in javascript // in this the loginDEtails function is inside the prototype
// class User{
//     constructor(username,age,name){
//         this.username=username;
//         this.age=age;
//         this.name=name
//     }
//     logindetailz(){
//         console.log(`${this.username} ${this.age} ${this.name} bla bla bla `)
//     }
// }

// const loginActivityy= new User("vvv6969",21,"prateeek");
// console.log(loginActivityy.logindetailz());
// console.log(loginActivityy);


// //constructor functions //in this the loginDEtails function is inside the object 
// function user (username,age,name){
//     this.username=username;
//     this.age=age;
//     this.name=name

//     this.logindetails=function(){
//         console.log(`${this.username} ${this.age} ${this.name} `)
//     }
// }

// const loginActivity= new user("vvv6969",21,"prateeek");
// console.log(loginActivity.logindetails()); 


// // //prototypal inheritance

// function userDetails (username,age,name){
//     this.username=username;
//     this.age=age;
//     this.name=name
// }

// userDetails.prototype.logindetailsplus=function(){
//     console.log(`${this.username} ${this.age} ${this.name} heheheheh`);
// }

// const loginActivityyy= new userDetails ("vvv6969",21,"prateeek");
// console.log(loginActivityyy.logindetailsplus());
// console.log(loginActivityyy);


// inheritance in class

class User {
    constructor(username){
        this.username=username;
    }
    studentName(){
        console.log(`My name is`)
    }

}

class Teacher extends User{
    constructor(username,rank,email){
        super(username);
        this.rank=rank;
        this.email=email;
    }

    perks(){
        console.log(`hi my username is ${this.username} and my rank is ${this.rank} and my email is ${this.email}`);
    }
}

const MonitorRaja= new Teacher("prat6969",1,"ayush@gmial.com");
console.log(MonitorRaja.perks());
