// 1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument
// Example:
//  const func = async () => {
//   console.log(“Printing before”)
//   //Call your function here eg. sleep(3000)
//   console.log(“Printing after”)
// }

const func = async () => {
  console.log("Printing before");
  //Call your function here eg. sleep(3000)
  timeMilliseconds=3000;
  let sleepPromise = new Promise(function(resolve){
    sleep(timeMilliseconds);
  })
  await sleepPromise;
}

const sleep=(timeMilliseconds)=>{
    setTimeout(()=>{console.log("Printing after")},timeMilliseconds)
}
func();

