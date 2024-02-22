const obj = {
    name:"Harry Potter",
    age: 12,
    address: {
     details: ["4", "Privet Drive"],
     area:"Little Whinging",
     city: "Surrey",
     state: "England"
    } 
   }

//method 1
// const newObject = JSON.parse(JSON.stringify(obj))
// newObject.address.details[0]="5";
// console.log("obj: ",obj);
// console.log("newObject: ",newObject);
//but using json stringify and parse we might loose data

//method 2:
// const newObject = {
//     ...obj,
//     address: {
//       ...obj.address,
//       details: [...obj.address.details]
//     }
//   };
// newObject.address.details[0]="5";
// console.log("obj: ",obj);
// console.log("newObject: ",newObject);

//method 3
const newObject = Object.assign({}, obj, {
    address: Object.assign({}, obj.address, {
      details: obj.address.details.slice() 
    })
  });
newObject.address.details[0]="5";
console.log("obj: ",obj);
console.log("newObject: ",newObject);