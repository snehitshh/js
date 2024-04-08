/*let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{                   
    console.log("btn 1 was clicked");
    let a=25;
    a++;
    console.log(a);
};*/
//using event listeners      --advantage of event listeners is that we can make it do multiple commands at same time
btn1.addEventListener("click",(evt)=>{
    console.log("button was clicked handler 1");
});
btn1.addEventListener("click",(evt)=>{         // adding an event to the same  button , we will get outputs of both events
    console.log("button was clicked handler 2");
});




 let btn2=document.querySelector("#btn2");
 btn2.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
 }