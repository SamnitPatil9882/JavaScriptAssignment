// Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).


// for(var id in uE){
//     res[uE[id].id].email = uE[id].email;
// }
// console.log(res)

function mergeById(userNames, userEmails){
    let mp ={};
    for (const obj of userNames){
        if(!mp[obj.id]){
            mp[obj.id]=1;
        }else{
            mp[obj.id]++;
        }
    }
    for (const obj of userEmails){
        if(!mp[obj.id]){
            mp[obj.id]=1;
        }else{
            mp[obj.id]++;
        }
    }
    const objArray ={};
    for (const obj of userEmails){
        if(mp[obj.id]%2==0){
            objArray[obj.id]=obj;
        }
    }
    for (const obj of userNames){
        if(mp[obj.id]%2 == 0){
            objArray[obj.id]=Object.assign(obj,objArray[obj.id]);
        }
    }
    return Object.values(objArray)
}

let userNames = [{
"id": 1,
"first_name": "Nicki",
}, {
"id": 2,
"first_name": "Raychel",
}, {
"id": 3,
"first_name": "Demetris",
}, {
"id": 5,
"first_name": "Amata",
}]

let userEmails = [{
"id": 2,
"email": "rmcgrady1@cpanel.net",
}, {
"id": 1,
"email": "ncrozier0@squarespace.com",
}, {
"id": 4,
"email": "abraiden3@canalblog.com",
}, {
"id": 7,
"email": "dkilshall2@elpais.com",
}]
 
console.log(mergeById(userNames, userEmails));

//This should return an array of users in the format: 
// [{
// "id": 1,
// "first_name": "Nicki",
// "email": "ncrozier0@squarespace.com",
// }, {
// "id": 2,
// "first_name": "Raychel",
// "email": "rmcgrady1@cpanel.net",
// }, {
// "id": 3,
// "first_name": "Demetris",
// "email": "dkilshall2@elpais.com",
// }, {
// "id": 4,
// "first_name": "Amata",
// "email": "abraiden3@canalblog.com",
// }]