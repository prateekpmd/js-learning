//setters and getter
//Accessor Property
//In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

//get - to define a getter method to get the property value
//set - to define a setter method to set the property value
const x={
    _name:"prateek",
    _age:12
}

Object.defineProperty(x,"name",{
    get: function(){
        return `hello mofo ${this._name}`;
    },
    set: function(val){
        this._name=val;
    }

});
x.name="ZACO";
console.log(x.name);


