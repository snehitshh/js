//styling from js
let div1=document.querySelector("#box");
div1.style.backgroundColor="blue";
div1.style.fontSize="26px";

//adding elements 
let newBtn=document.createElement("button");
newBtn.innerText="click me";
console.log(newBtn);

let div=document.querySelector("div");
div.append(newBtn);        //node.append adds at the end of the node(inside)

let div2=document.querySelector("div");
div2. prepend(newBtn);      //node.prepend adds at the beggining of the node(inside)

let div3=document.querySelector("div");
div3.before(newBtn);       //node.before adds before the node(outside)

let div4=document.querySelector("div");
div4.after(newBtn);        //node.after adds after the node(outside)

//explaining the above by adding a heading in the page
let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>hello there</i>";
document.querySelector("body").prepend(newHeading);

//deleting elements
let para=document.querySelector("p");
para.remove();