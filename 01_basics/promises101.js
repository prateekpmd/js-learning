//promises101
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
var addTwoPromises = async function(promise1, promise2) {
    return new Promise(async(resolve, reject) => {
        // Promise.all([promise1, promise2])
        //     .then(([res1, res2]) => resolve(res1 + res2))
        //     .catch(reject);
        await promise1.then((firstItem)=>{
            promise2.then((secondItem)=>{
                    resolve(firstItem+secondItem);
            })
        })
    });

};


  addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then((XX) => {
    console.log(XX); // This will log the resolved value, which is 4
})
.catch((error) => {
    console.error('Error:', error); // Handle any errors here
});
