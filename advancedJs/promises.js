//promise has 3 states-->pending,fulfilled(resolved),rejected


let promise=new Promise((resolve,reject)=>{
    console.log("i am a promise");
    resolve("success");
    //reject("some error occured");
})

function getData(dataId,getNextData){         //generally this is how api's return promises
   return new Promise((resolve,reject)=>{   //this is how promises are called
    setTimeout(() => {
        console.log("data",dataId);   //just after it prints the data the promise is resolved with a success message
        resolve("success")
        if(getNextData){           //condition to call getNextData if only it exists
            getNextData();
        }
    }, 2000);

   })
}

const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise");
        resolve("success");
        //reject("error")          //if rejected then we never execute promise.then
    })
}

let promise1=getPromise();
promise.then((res)=>{                    //if a success
    console.log("promise fulfilled",res);     //res and err are the parameters passed in resolve and reject in the getPromise function
});

promise.catch((err)=>{           //if rejected then this is printed
    console.log("rejected",err);
});

//promise chain
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        console.log("data1");
        resolve("success");
      }, 4000);
    });
}


function asyncFunc2(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        console.log("data2");
        resolve("success");
      }, 4000);
    });
}

/*console.log("fetching data1...")
let p1=asyncFunc1();
p1.then((res)=>{
    console.log(res);
});

console.log("fetching data2...")              //this will give both data at same time but we want that first data1 is printed then 2
let p2=asyncFunc2();                
p2.then((res)=>{
    console.log(res);
}); */

console.log("fetching data1...")
let p1=asyncFunc1();
p1.then((res)=>{
    console.log(res);
    console.log("fetching data2...");
    let p2=asyncFunc2();
     p2.then((res)=>{
        console.log(res);
    })
});
//or
console.log("fetching data1...")
asyncFunc1.then((res)=>{
    console.log("fetching data2...");
    asyncFunc2.then((res)=>{})
});

//promise chain
function getData(dataId){         //generally this is how api's return promises
    return new Promise((resolve,reject)=>{   //this is how promises are called
     setTimeout(() => {
         console.log("data",dataId);   //just after it prints the data the promise is resolved with a success message
         resolve("success")
     }, 3000);
 
    })
 }

getData(1).then((res)=>{
    console.log(res);
    getData(2).then((res)=>{
        console.log(res);
    });
});

//better way of writing above (this is actual promise chain)
getData(1)
.then((res)=>{
    return getData(2);
})
.then((res)=>{
    console.log(res);
    return getData(3);
})
.then((res)=>{
    console.log(res);
})                   //this is like callback hell
  