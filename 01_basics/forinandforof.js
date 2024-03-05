// for in ===> object 
//for of ===> array


const obj={
    name:"prateek",
    age:16
}
for(let [key,value] of Object.entries(obj) ){
    console.log(key,value)
}