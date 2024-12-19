const sayDate=function(count){
    
    console.log(count,Date.now());
}
// clearInterval(IntervalId)
const start=document.querySelector('#start');
const stop=document.querySelector('#stop');
// const IntervalId;
start.addEventListener('click',function(){
    IntervalId=setInterval(sayDate,1000,"Start clicked")
    // IntervalId=setInterval(sayDate,1000,)
    // const IntervalId=setInterval(sayDate,1000,"hi")
})
stop.addEventListener('click',function(){
    clearInterval(IntervalId);
    console.log("Stopped");
})
