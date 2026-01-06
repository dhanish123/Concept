function myFunction(){  //fn remember the variables    
    const a=10;
    const b=20;
    function innerFunction(){
        console.log(a,b);
    }
    return innerFunction;
}
const myClossure = myFunction()
myClossure();
