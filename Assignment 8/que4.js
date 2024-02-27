/*
4.  What will be printed to the console?
const testAsyncFunction = () =>{
return Promise.reject('Test static reject');
};
testAsyncFunction()
.then((res) =>{
console.log('Response in then block', res);
})
.catch((err) => console.log('Error in catch block', err));

*/

const testAsyncFunction = () =>{
    return Promise.reject('Test static reject');
    };
    testAsyncFunction()
    .then((res) =>{
    console.log('Response in then block', res);
    })
    .catch((err) => console.log('Error in catch block', err));

//Answer =>
//always in console
// Error in catch block test static reject 
// will be printed