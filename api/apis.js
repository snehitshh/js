const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getFacts=async()=>{
    console.log("getting data...");
    let response=await fetch(URL);             //response is an object
    console.log(response);              //JSON format
    let data=await response.json();
    console.log(data[0].text);
    factPara.innerText=data[0].text;    
}

/* function getFacts1(){          //doing above with promise chaining
    fetch(URL)
    .then((response)=>{
       return  response.json();
    })
    .then((data)=>{
        console.log(data);
        factPara.innerText=data[0].text; 
    });
} */

btn.addEventListener("click",getFacts);

