function groupBy(obj,property){
    let result = {};
    for (let i in obj){
        if(!result[obj[i][property]]){
            result[obj[i][property]]=[];
        }
        result[obj[i][property]].push(obj[i])
    }
    return result;
}

// function groupBy(arr, key) {
//     return arr.reduce((acc, obj) => {
//         const group = obj[key];
//         if (!acc[group]) {
//             acc[group] = [];
//         }
//         acc[group].push(obj);
//         return acc;
//     }, {});
// }

let users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09",
    "gender":"Male",
    }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05",
      "gender":"Female"
    }, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31",
      "gender":"Male"
    }, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23",
      "gender":"Female"
    }];
    console.log(groupBy(users, "gender"));
    //This should return 
    //{
    //"Male":[
    // {id:1, first_name:"Nicki", ...}, 
    // {id:3, first_name:"Demetris", ...}
    //]
    //"Female":[
    // {id: 2, first_name:"Raychel", ...},
    // {id: 4, first_name:"Amata", ...}
    //]
    //}