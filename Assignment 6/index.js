const arr = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
    }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
    }, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31"
    }, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23"
    }, {
    "id": 5,
    "first_name": "Venita",
    "email": "vheap4@clickbank.net",
    "date_of_birth": "2020/10/04"
    }, {
    "id": 6,
    "first_name": "Fairfax",
    "email": "fcrichton5@merriam-webster.com",
    "date_of_birth": "2009/12/23"
    }, {
    "id": 7,
    "first_name": "Kathleen",
    "email": "kvasyukhnov6@devhub.com",
    "date_of_birth": "2010/12/20"
    }, {
    "id": 8,
    "first_name": "Sam",
    "email": "scorck7@sitemeter.com",
    "date_of_birth": "2020/08/30"
    }, {
    "id": 9,
    "first_name": "Virgilio",
    "email": "vferandez8@e-recht24.de",
    "date_of_birth": "2000/09/07"
    }, {
    "id": 10,
    "first_name": "Townie",
    "email": "tpetyt9@upenn.edu",
    "date_of_birth": "2018/09/01"
    }];


// unction filterByName that accepts a string as a parameter and 
// returns an array with only those objects where the first_name field includes that string.
    function filterByName(firstName){
        // const ans =[];
        // for(let i=0; i<arr.length; i++){
        //     if(arr[i].first_name==firstName){
        //         ans.push(arr[i])
        //     }
        // }
        // return ans;

        const res =arr.reduce((acc,curr)=>{
            if(curr.first_name==firstName){
                acc.push(curr)

            }
            return acc;
            
        },[])
        return res;
    }
    console.log(filterByName("Townie"));
    console.log(filterByName("Kathleen"));

// Use Array.map to return an array of all the email fields.
    
    function fetchEmailIDs(obj){
        return obj.email
    }
    console.log(arr.map(fetchEmailIDs));

//  Use Array.sort to return the array sorted in descending order by date_of_birth.
    const compareDate = (d1,d2) =>{
        let date1 = new Date(d1.date_of_birth);
        let date2 = new Date(d2.date_of_birth);

        return (date1-date2)*-1;
    }
    arr.sort(compareDate);
    console.log(arr);


// Write a function getById that accepts a number as a parameter and 
// returns the object where the id is equal to that number.

    function getById(id){
        for(let i=0; i < arr.length; i++){
            if(arr[i].id==id){
                return arr[i];
            }
        }
    }

    const objByID = getById(2);
    console.log("object By id: "+objByID);
    console.log(objByID.id,
        objByID.first_name,
        objByID.email,
        objByID.date_of_birth);

//==================================================
// mutating method => methods that modify the original array
// non-mutating method => methods that return new array without modifying the original

let a =[1, 2, 3, 4]
console.log("Original array: ",a);
// push: adds one or more elements to the end of an array
// push : mutating method
 a.push(5);
 console.log("push(): ",a);

// pop: removes last element of array
// pop: mutating method
a.pop()
console.log("pop(): ",a);

// filter: create a new array from a given array consisting of only those elements 
// from given array that satisfy a condition set by the argument method
// filter: non-mutating
 const b = a.filter((value) => (value>2))
 console.log(b);

 // find: returns first element from array that satisfies provided testing function.
 // if no values satisy testing function, undefined is returned
 // find : non-mutating

 const found = a.find((ele)=>(ele>2));
 console.log(found);

// sort: sorts elements of an array in place return reference to same array
// sort: mutating
// we can use toSorted() for non-mutating sorting it returns new array without changing original
 const arr2=[1,8,5,7,2]
 arr2.sort();
 console.log("arr 2: ",arr2);

 // map: creates new array populated with the results of calling a provided function on every element in calling array
 // map: non-mutating
 const arr3=[1,8,5,7,2]
 const res=arr2.map((ele)=>(ele*2));
 console.log("arr 3: ",arr2);
 console.log("result of map: ",res);


 //How can verify this
 // using documentation and testing some examples
