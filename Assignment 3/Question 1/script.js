let age = 25
console.log(age)

if(age <= 12){
    console.log("CHILD")
}else if(age <18){
    console.log("Teen");
}else if(age > 18){
    console.log("Adult")
}
else{
    console.log("Enter valid age !!");
}

switch(age){
    case age<=12:{
        console.log("CHILD")
        break;
    }
    case age<18:{
        console.log("Teen")
        break;
    }
    case age>18:{
        console.log("Adult")
        break;
    }
    default:{
        console.log("Enter valid age !!");
    }
}

let arraySize = 25;

const forLoopArray=[];
for(let i=1;i<=arraySize;i++){
    forLoopArray.push(i)
}
console.log("forLoopArray: ",forLoopArray);

const whileLoopArray=[];
let i=1;
while(i<=arraySize){
    whileLoopArray.push(i);
    // if (i==5)return;
    i++;
}
console.log("whileLoopArray: ",whileLoopArray);

// Can you use return instead of break in loops?
// yes ,
// but break statement break the loop and give the control to the next statements
// but return give the control to caller function therefore statements after loop will not get execute
