let heading=document.getElementById("heading1");
console.dir(heading);

let headings=document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);

let parahs=document.getElementsByTagName("p");
console.dir(parahs);

//query selector
let firstElement=document.querySelector("p")   //gives first element to the corresponding tag inside
console.dir(firstElement);

let allElements=document.querySelectorAll("p")  //all elements
console.dir(allElements);