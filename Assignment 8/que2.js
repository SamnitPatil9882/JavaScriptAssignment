// 2.  Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). Log the data into the console once it is received

let apiPromise = new Promise(function(resolve,reject){
    
    fetch('https://reqres.in/api/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
})
apiPromise.then(
    function(value){
        console.log(value);
    },
    function(error){
        console.log(error);
    }
)
