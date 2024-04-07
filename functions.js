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
let arr=[1,2,3,4,5];              //for each funtion
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