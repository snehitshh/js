async function hello(){        //async function returns a promise compulsorily   
    console.log("hello");
}


function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200);  //200 represents success
        }, 2000);
    });
}

async function getWeatherData(){
    await api(); //1st call
    await api(); //2nd call
}

//async-await

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200);  //200 represents success
        }, 2000);
    });
}

async function getAllData(){
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
    console.log("getting data 3...");
    await getData(3);
    console.log("getting data 4...");
    await getData(4);
    console.log("getting data 5...");
    await getData(5);
}

//IIFE-Immediately invoked function expression (iife is function that is called immediately as soon as it is defined)
//the above function needs to be called in the console

(async function (){              //this is an IIFE , it executes immediately and is executed only once can't be called again
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
    console.log("getting data 3...");
    await getData(3);
    console.log("getting data 4...");
    await getData(4);
    console.log("getting data 5...");
    await getData(5);
})();

