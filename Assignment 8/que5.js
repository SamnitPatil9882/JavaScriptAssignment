/*
5. What will be printed to the console?
const testAsyncFunction = () =>{
return new Promise((resolve, reject) =>{
if (Math.random() > 0.5) {
resolve('Test Resolve');
} else {
reject('Test Reject');
}
}).catch((err) =>{
console.log('Error caught in testAsyncFunction', err);
throw new Error('Forced error');
});
};
testAsyncFunction()
.then((res) =>{
console.log('Response in then block: ', res);
})
.catch((err) => console.log('Error in catch block: ', err));

*/

/*
Answer =>
whenever Math.Random() return <=0.5
reject return error which is caught by catch block of constructor and it also throws an error
which will be catch by chained catch block
two prints will be there

if  Math.Random() return > 0.5
then method of testAsynFunction will be executed
only one print will be there
*/
    