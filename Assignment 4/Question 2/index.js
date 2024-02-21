function test(callback){
    callback();
}

function callbackFunc(){
    console.log("Calling the callback function");
    return 5;
}

// test(callbackFunc)//output : Calling the callback function
// test(callbackFunc())//TypeError: callback is not a function
// test(()=>callbackFunc())//output: Calling the callback function

console.log(test(callbackFunc));//undefined
console.log(test(callbackFunc()));//TypeError: callback is not a function


// surajRane45   Githublink
