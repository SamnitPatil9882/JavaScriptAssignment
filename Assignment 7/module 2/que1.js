function mapBy(arr,property){
    let result = {};

    for(let i in arr){
        result[arr[i][property]]=arr[i];
    }
    return result;
}

let users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
    }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
    }];
    console.log(mapBy(users, "first_name"));
     
    //This should return
    //{
    // “Nicki”:{id:1, first_name:”Nicki”, ...},
    // “Raychel”:{id:2, first_name:”Raychell”, ...},
    //}

    