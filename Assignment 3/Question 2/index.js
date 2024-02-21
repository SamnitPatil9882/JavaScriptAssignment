let letArray = ["a","b","c"];
console.log("letArray: ",letArray);

letArray.push("d");
console.log("letArray: ",letArray);

letArray.pop();
console.log("letArray: ",letArray);

letArray[1]="e";
console.log("letArray: ",letArray);

letArray= ["x","y","z"];
console.log("letArray: ",letArray);

const constArray = ["a","b","c"];
console.log("constArray: ",constArray);

constArray.push("d");
console.log("constArray: ",constArray);

constArray.pop();
console.log("constArray: ",constArray);

constArray[1]="e";//
console.log("constArray: ",constArray)

// constArray= ["x","y","z"];//TypeError: Assignment to constant variable.
// console.log("constArray: ",constArray);





// const numbers = [1,2,3];
// const otherNumbers = [1,2,3];
// numbers === otherNumbers //false
// numbers == otherNumbers //false
// const emptyArray = [];
// const emptyObject = {};
// // emptyArray === [];//always false
// emptyArray == []//false
// emptyObject == {}//false
// emptyObject === {}//false

//more generally
// [] === [] //false
// [] == [] //false
// {} === {} //false
// {} == {} //false


//What is the difference between an object declared as a let or a const variable?
// let is used when we need to create  variable that should be only accessed inside the block.
// const is used when we need to create a variable that should only be accessed inside the block , and the value of the variable remains unchanged.