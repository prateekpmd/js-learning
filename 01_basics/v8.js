/*
html parser (script loading) ->
byte stream decoding ->
parser (ast banta hai (abstract syntax tree)) ->
ignition interpretor ->(
    1. converts the code into bye code 
    2. event loop happens inside interpretor 
    3. so the ignition uses registers and accumalators to acheive the result(ie result=100); //it even uses a shape table
    4. the byte code furthers goes through more optimizations and which can be executed on our machines.
    5. the bye code consist of something which uses v8's optimization (turbo fan)( 
        1. the object passes to it, it makes a shape table which has an offset (stored somewehre in memeory)
        2. shapes are usefull for both igniton and turbo fanbecuase v8 uses inline cache
        3. inline catche stores values of previously operations so that next time if we call the same operation we already know the result.
        4. The inline catche is not only benefical for interreptor but also benefical for compiler because 
        5. the inline catche creates a "feedback table" (contains info about exection of the function).
        6. v8 uses turbofan compiler = to genrate machine code. 
        6. based on the byte code and feedback table turbofan genreates machine code that can run directly in your machine
        7. this is the actuall operation function(x,y,z)
        8.suppose function(x) is called, so the shape check fails, so we cant use the optimised machine code 
        9. so we have to deoptimise back to the genrated byte code. which is expensive
    )
)



//nullish coelescing operator (it avoids null and undefined )

const aa= null ?? 10; // output will be 10 


*/
