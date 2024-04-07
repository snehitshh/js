function sum(a,b){
return a+b;
}

const arrowSum=(a,b)=>{      //arrow function
console.log(a+b);
};
const arrowMul=(a,b)=>{
    return a * b;
};

function countVowels(str){
    let count=0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
        count++;
    }
    return count;
}
let arr=[1,2,3,4,5]; //for each funtion  , it is a higher order function(either takes another function as parameter or returns another func)
arr.forEach(function printVal(value){
    console.log(value);
})


let arr1=[1,2,3,4,5];           //in arrow function format
arr1.forEach((val)=> {         //for each is used if we want to change something in every value of array
console.log(val);
});

let arr3=["delhi","pune","mumbai"];           //in arrow function format
arr3.forEach((val)=> {         //for each is used if we want to change something in every value of array
console.log(val);
});

let arr4=["delhi","pune","mumbai"];           //in arrow function format
arr4.forEach((val)=> {         //for each is used if we want to change something in every value of array
console.log(val.toUpperCase());
});
 
let nums=[1,2,3,4,5];             //map 
let newArr=nums.map((val)=>{ //takes the values from another array and modifies it according to the use and places the them in a new array
    return val*2;
});

let ar=[1,2,3,4,5,6];          //filter
let evenArr=ar.filter((val)=>{ //filters out even values here i.e it works as a filter according to the operation and places in a new array
    return val%2==0; 
});
console.log(evenArr);


let arr5=[1,2,3,4,5];          //reduce 
const output =arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(output);    

let arr6=[1,2,3,4,5];
const output1 =arr.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
})
console.log(output1);    