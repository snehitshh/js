setTimeout(() => {
    console.log("hello");
}, 4000);

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallBack){          //callback
    sumCallBack(a,b);
}
calculator(1,2,sum);


function getData(dataId){
setTimeout(() => {
    console.log("data",dataId);
}, 2000);
}
getData(1);   //all of these will be printed after 2s at the same time
getData(2);
getData(3);

function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("data",dataId); 
        if(getNextData){           //condition to call getNextData if only it exists
            getNextData();
        }
    }, 2000);
}
//callback hell   -->these are nexted callbacks and known as callback hells and this kind of programming is difficult to hell 
                // and therefore promises are used
getData(1,()=>{      //getData(1,getData(2)) --> this will give an error as we cant pass arguments in callback
          console.log("getting data 2");
    getData(2,()=>{                   //this will give a delay of 2s to get the next data
        console.log("getting data 3");
        getData(3,()=>{
            console.log("getting data 4");
            getData(4)             //this gets very complicated to understand
        });
    });                   
});


