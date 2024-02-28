//Async
//Promise it is an object that manages asyncronous operations.
//wraps a promise object across {asyn code}
//' i promise to return something'
//new Promise((resolve,reject){
    //async code
//})

//calback hell
// function walk(cb){
//     setTimeout(()=>{
//         console.log("walking");
//         cb();
//     },1000)
// }

// function talk(cb){
//     setTimeout(()=>{
//         console.log("talk");
//         cb();
//     },1000);
// }
// function run(cb){
//     setTimeout(()=>{
//         console.log("runn");
//         cb();
//     },1000);
// }

// function box(){
//     setTimeout(()=>{
//         console.log("box");
//     },1000);
// }

// walk(()=>{
//     talk(()=>{
//         run(box);
//     })
// });



function walk(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("walking");
        },1000)
    })
    
}

function talk(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("talking");
        },1000)
    })
}
function run(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const r=false;
            if(r){
                resolve("running");  
            }else{
                reject(" not running");
            }

        },1000)
    })
}

function box(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve("boxing");
            
        },1000)
    })
}

// walk().then((val)=>{
//             console.log(val);
//             return talk();
// }).then((vall)=>{
//     console.log(vall);
//     return run();  
// }).then((vall)=>{
//     console.log(vall);
//     return box();   
// }).then((vall)=>{
//     console.log(vall);
// }).catch((error)=>{
//     console.error(error);
// })


//async makes a fucntion returns a (using async you can make a function return a promise) wrt function.
//await is something that makes the function wait for promise


// async function pat(){
//     try{
//         const walkk= await walk();
//         console.log(walkk);
//         const talkk= await talk();
//         console.log(talkk);
//         const runn= await run();
//         console.log(runn);
//         const boxx= await box();
//         console.log(boxx);
//     }catch(error){
//         console.error(error)
//     }
   
// }

// pat();


// fetch('https://api.github.com/users/prateekpmd').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })

//  fetch('https://api.github.com/users/prateekpmd').then((response)=>{
//    return response.json()
//  }).then((data)=>{
//     console.log(data);
//  })
