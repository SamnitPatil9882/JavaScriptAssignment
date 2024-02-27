// 3. What will be printed to the console when the promise resolves and when it rejects?

const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction: ', err);
        // throw err;
    });
};
testAsyncFunction()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));

/*
    In the given code,
    whenever Math.Random() return <=0.5 the error will occured it will be catched by catch block of constructor of promise and it will not reach chained catch block.
    to be catched by chained catch block we have to throw error from catch block of constructor also.
    If error will not occur then promise will be resolved.

    In given code 
    console.log('Response in then block: ', res);
    will always execute
*/  

