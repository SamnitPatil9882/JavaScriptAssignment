let a;
console.log(a);  //undefined
console.log(typeof a);//undefined

a=5;
console.log(a);     //5
console.log(typeof a);  //number

// const b;//getting error :Missing initializer in const declaration
//         //const must be intialize at declaration
// console.log(b);
// console.log(typeof b);

const b=5;
console.log(b);     //5
console.log(typeof b);      //number

let strVar = "string";
console.log(typeof strVar);

let intVar = 12;
console.log(typeof intVar);

let floatVar = 12.5;
console.log(typeof floatVar);

let boolVar = true;
console.log(typeof boolVar);

let charVar = 'a'
console.log(typeof charVar);

let arr = [1,2,3,4,5];
console.log(arr)
console.log(typeof arr)

let nullObj = null
console.log(nullObj)
console.log(typeof nullObj)

let nanVar = NaN
console.log(nanVar)
console.log(typeof nanVar)

console.log(Array.isArray(arr)) //without typeOf we can use isArray method of Array
console.log(isNaN(nanVar))  //isNan function is used to check given variable is NaN or not

