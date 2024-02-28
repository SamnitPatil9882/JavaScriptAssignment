// /*
// 6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.

// */

const func = async ()=>{
    let apiPromise = new Promise(function(resolve,reject){
    
        fetch('https://reqres.in/api/users')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then(data => {
            console.log("Data has been received")
            console.log("Wait for 2 sec.");
          setTimeout(() => {
            resolve(data)
          }, 2000);
        })
        .catch(error => {
          reject(error);
        });
    })
    await apiPromise.then(
        function(value){
            console.log("Data : ");
            console.log(value);
        },
        function(error){
            console.log(error);
        }
    )
    
}
func();



