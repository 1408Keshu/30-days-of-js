//generate random Color
const randomColor= function(){
    const hex ='0123456789ABCDEF';
    let color='#';
    for(let i=0 ; i<6 ; i++){
        color +=hex[Math.floor(Math.random() * 16)];

    }
    return color;
}
let IntervalId;
const startChangingColor=function(){
    if(!IntervalId){ //if its null 

        IntervalId=setInterval(changeColor,500);
    }
    function changeColor(){
        document.body.style.backgroundColor=randomColor();

    }
    console.log('start')
};
const stopChangingColor=function(){
    clearInterval(IntervalId);
    console.log('stopped')
    IntervalId=null;
}
document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)