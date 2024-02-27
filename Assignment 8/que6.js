// /*
// 6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.

// */

// const func = async ()=>{
//     let apiPromise = new Promise(function(resolve,reject){
    
//         fetch('https://reqres.in/api/users')
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Failed to fetch data');
//           }
//           return response.json();
//         })
//         .then(data => {
//           resolve(data);
//         })
//         .catch(error => {
//           reject(error);
//         });
//     })
//     await apiPromise.then(
//         function(value){
//             console.log("Data is fetched and will be printed after 2 sec: ");
//             setTimeout(()=>(console.log(value)),2000);
//         },
//         function(error){
//             console.log(error);
//         }
//     )
    
// }
// func();


const promise = new Promise((res, rej) => rej()).then(res => console.log("RESOLVED")).catch(err => console.log("REJECTED")); promise.then(res => console.log("RESOLVED AGAIN")).catch(err => console.log("REJECTED AGAIN"));