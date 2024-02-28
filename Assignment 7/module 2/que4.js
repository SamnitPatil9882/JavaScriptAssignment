// Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).


// for(var id in uE){
//     res[uE[id].id].email = uE[id].email;
// }
// console.log(res)

function mergeById(userNames, userEmails) {
    const map = {};
    
    // First, map userNames by id
    for (const user of userNames) {
        map[user.id] = { ...user };
    }
    
    // Then, merge userEmails into the map
    for (const user of userEmails) {
        if (map[user.id]) {
            map[user.id] = { ...map[user.id], ...user };
        }
    }

    // Filter out objects without both first_name and email
    const result = Object.values(map).filter(user => user.first_name && user.email);

    return result;
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