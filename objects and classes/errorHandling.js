let a=5;
let b=10;
console.log(a);
console.log(b);
console.log(a+b);
try{
    console.log(a+c);  //error
}
catch(err){                //handle errors
console.log(err);
}

console.log(a-b);  //these lines will not be printed if there is an error and therefore error handling used
console.log(a*b);
