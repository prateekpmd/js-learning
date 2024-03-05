var createCounter = function(init) {
    let value=init;
    return {
        increment:function(){
            value++;
            console.log (`increment ${value}`);

        },

        decrement:function(){
             value--;
             console.log (`decrement ${value}`);
        },
         reset:function(){
           value=init;
           console.log (` reset ${value}`);
        },

    }
};


  const counter = createCounter(5)
  counter.increment(); // 6
  counter.reset(); // 5
  counter.decrement(); // 4
 