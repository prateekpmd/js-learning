for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }

// do while

let i = 0;
do {
  console.log(i);
  i++;
}
while (i <= 5);

// while
while(i <= 5){
    console.log(i);
    i++;
}

// for of loop (array,map);
const x=[2,4,6,8];

//map(unique key value pairs)

const maap= new Map();
maap.set("IN","INDIA");
maap.set("USA","UNITED STATES OF AMERICA");

console.log(maap); //Map(2) { 'IN' => 'INDIA', 'USA' => 'UNITED STATES OF AMERICA' }

for (const iterator of maap) {
    console.log(iterator);
}
//or 
for (const [iterator] of maap) {
    console.log(iterator);
}

//for in loop () //object,array and not map
const y={
    name:"prateek",
    age:23
};

for (const key in y) {
    console.log(key)
}
 
for (const key in y) {
    console.log(y[key]);
}
// you can use array in "for in loop"
for (const key in x) {
    console.log(key)
} //0,1,2,3

for (const key in x){
    console.log(x[key]);
}

 