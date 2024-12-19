setTimeout(function(){
    console.log("Hii keshav")
    // alert("Warning,Danger")
}, 3000);
const change=function(){
    document.querySelector('h1').innerHTML="Hello EveryOne";
}
const changeMe = setTimeout(change,3000)
document.querySelector('#button').
addEventListener('click',function(){
    clearTimeout(changeMe); //to clear  settimeOut we use clearSetTimeOut so it will not change 
    //using the name of setTimeout function
    console.log("Stopped");
}
)


