function forloopReturnCheck(){
    for(let i=0;i<10;i++){
        if (i==5){
            // break;
            return "return from index "+i;
        }
        console.log(i);
    }
}
console.log(forloopReturnCheck());

function whileloopReturnCheck(){
    let i =0;
    while(true){
        if (i==5){
            // break;
            return "return from index "+i;
        }
        console.log(i);
        i++;
    }
}
console.log(whileloopReturnCheck());

function swithcCaseCheck(x){
    switch(x){
        case 1:return "x: "+x;
        case 2:return  "x: "+x;
        default: return "value not matched"
    }
}
console.log(swithcCaseCheck(5))