
function filterObject(obj){
    let result={};
    obj=Object.assign(obj,{});
    for(let i in obj){
        
        if(!(typeof(obj[i]) === 'object' || Array.isArray(obj[i])) ){
            let k=i;
            result[i]=obj[i];
        }
        
    }
    return result;
}

let obj = {
    a:"Apple",
    b:["Basketball","Baseball"],
    c: {
     call: "cellphone"
    },
    d: "Dog"
   }
   console.log(filterObject(obj) );


