//Getters and setters allow you to control how your object properties are accessed and modified.
//Getters and setters can be used to validate data before it is set to an object.(data validation)

// const x={
//     _name:"prateek",
//     _age:12
// }

// Object.defineProperty(x,"name",{
//     get: function(){
//         return `hello mofo ${this._name}`;
//     },
//     set: function(val){
//         this._name=val;
//     }

// });
// x.name="ZACO";
// console.log(x.name);


//

// const y={
//     _name:"prateek",
//     _age:12,

//     get name(){
//         return `mera naam hai ${this._name}`
//     },
//     set name(val){
//         this._name=val
//     }
// }

// console.log(y.name)

// function user(name,age){
//     this._name=name;
//     this._age=age;

//     Object.defineProperty(this,"name",{
//         get: function(){
//             return `hello mofo ${this._name}`;
//         },
//         set: function(val){
//             this._name=val;
//         }
    
//     });
// }

// const prateek= new user("prateek",11);
// console.log(prateek.name);

//
// class janwar{
//     constructor(name,age){
//         this._name=name;
//         this._age=age;
//     }

//        get name(){
//        return `mera Joota Japani hai ${this._name}`
//      }

//      set name(val){
//          this._name=val
//      }
// }
// const xxo=new janwar("pat",11);
// console.log(xxo.name)

//
const y={
    _name:"prateek",
    _age:12,

    get name(){
        return `Joota Japani mera naam hai ${this._name}`
    },
    set name(val){
        this._name=val
    }
}

// const tea=Object.create(y); OR
const tea={...y}
console.log(tea.name);
