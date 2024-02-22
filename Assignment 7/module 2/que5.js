//function to filter an array of strings to hold only unique values

function uniqueVal(arr){
    res={};
    for(ele of arr){
        res[ele]=1;
    }
    return Object.keys(res);
}
arr = ["suraj","rahul","amar","rahul"];
console.log(uniqueVal(arr));