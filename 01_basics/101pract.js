//
// //constructor functions //in this the loginDEtails function is inside the object 

function hij(username){
    this.username=username
}



function user (username,age,name){
    hij.call(this,username)
    this.age=age;
    this.name=name

    this.logindetails=function(){
        console.log(`${this.username} ${this.age} ${this.name} `)
    }
}

const loginActivity= new user("vvv6969",21,"prateeek");
console.log(loginActivity.logindetails()); 
