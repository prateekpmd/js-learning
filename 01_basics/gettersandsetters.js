//gettersandsetters 

class User{
    constructor(namee,username){
        this.namee=namee;
        this.username=username;
    }

    get namee(){
        return `${this._namee} hahaahhahahah`
    }

    set namee(val){
        if(typeof val==='number'){
            throw new Error (`name cant be a number`);
        }
        this._namee=val;
    }
} 

const prateek= new User("prateek","username@88");

console.log(prateek);
console.log(prateek.namee);
prateek.namee=22;
console.log(prateek.namee);
