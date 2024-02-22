// Difference between ++i and i++

// "++i" is known as the pre-increment operator
// which increments the value of "i" immediately and returns the incremented value.

// "i++" is known as post-increment operator
// which increments the value of "i" held before being incremented

let i=5;
let a=i;
console.log("before pre-incremented: "+ a);
a=++i;
console.log("after pre-incremented: "+ a);

let j=5;
let b=j;
console.log("before post-incremented: "+ b);
b=j++;
console.log("after post-incremented: "+ b);


//What if if we pass index beyond the range of string ? or if you pass negative index?

let str = "string";
console.log("start index: "+str[0]);//start index
console.log("end index: "+str[str.length-1]); //end index

console.log("negative index: "+str[-1]);//negative index
console.log("beyond range: "+str[str.length]); //beyond range

// negative index and beyond range index return undefined

// if we want to access the elements using negative indexes like python then we can use proxies
// proxy is an object that wraps any other object(target) 
// any interactions interactions performed on the proxy are by default forwarded to target



// const letters = ['a', 'b', 'c', 'd', 'e'];
// const proxy = new Proxy(letters, {
//     get(target, prop) {
//         if (!isNaN(prop)) {
//             prop = parseInt(prop, 10);
//             if (prop < 0) {
//                 prop += target.length;
//             }
//         }
//         return target[prop];
//     }
// });
// proxy[0]; // => 'a'
// console.log(proxy[-1]); // => 'e'
// proxy[-2]; // => 'd'

//=========================================================
// Do you think Json.stringify would work for arrays as well?
// 
// Json.stringify static method converts Javascript value to a JSON string

console.log(JSON.stringify({
    x: 5,
    y: 6
}));

console.log(
    JSON.stringify([new Number(3),new String('string'),new Boolean(false)]),
);

console.log(JSON.stringify({
    x: [10,undefined,function(){},Symbol('')]
}));

console.log(
    JSON.stringify([1,2,3,4]),
);

//yes,we can stringify arrays as well


//=========================================================
// What about nested objects?

const obj = {
    x:5,
    y:10,
    obj1:{
        a:"a",
        b:"b",
        obj2:{
            x:"x",
            y:"y"
        }
    },
    obj3:{
        num1:10,
        num2:15
    }
}

console.log(JSON.stringify(obj))

//yes , we can also stringigy the nested objects

//=========================================================
// What happens if you pass a regular/invalid JSON string to JSON.parse? 

// const json ='{"name":"samnit", "RollNo":56}'
// const obj1 =JSON.parse(json);
// console.log(obj);//executed correctly

const json ='{name:"samnit", "RollNo":56}'//name is not in valid JSON format
const obj1 =JSON.parse(json);
console.log(obj);//give an syntaxError
console.log("json parse examples");//will not print


// What will happen if such an invalid function runs in the program?
// it will give Syntax Error

// Will other parts of the code execute correctly after that?
// no,as this is syntax error other part will not execute


//=========================================================
/*
    JSON => namespace object contains static methods for parsing
    Numbers : leading zeros are prohibited
              decimal point must be followed by at least one digit
              NaN and infinity are unsupported
*/