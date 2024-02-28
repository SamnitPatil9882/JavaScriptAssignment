//function to filter an array of strings to hold only unique values

function uniqueVal(arr){
    return [...new Set(arr)];
}
arr = ["suraj","rahul","amar","rahul"];
console.log(uniqueVal(arr));