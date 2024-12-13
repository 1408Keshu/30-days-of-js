const time=document.getElementById('time')
const date=document.getElementById('date')
// const time=document.querySelector('#time')

setInterval(function(){
let clock=new Date();
// console.log(clock.toLocaleTimeString());
date.innerHTML=clock.toLocaleDateString();
time.innerHTML=clock.toLocaleTimeString();
}, 1000);