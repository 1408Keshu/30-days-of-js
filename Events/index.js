document.getElementById('building').onclick=function(){
    // alert("Building Clicked");
} /*Not a good Approach*/
//attach Event
//jQuery -on
// document.getElementById('restaurant').addEventListener('click',function(){
    //     alert("restaurant clicked again")
    
    //  })/*good approach*/
// document.getElementById('images').addEventListener('click',function(e){
//         // console.log(e.log(e));
//      },false)
     //type ,timestamp, defaultPrevented
     //target ,toElement,srcElement,currentTarget,
     //clientX, clientY ,screenX ,screenY
     //altkey,ctrlkey,shiftkey, keyCode
     
//  document.getElementById('images').addEventListener('click',function(e){
//      //  alert(" clicked inside the ul")
//      console.log("clicked inside the ul");
//              // console.log(e.log(e));
//     },false) 
//  document.getElementById('caravan').addEventListener('click',function(e){
//              //  alert(" clicked inside the ul")
//              console.log("clicked caravan");
//              // console.log(e.log(e));
//              //stopPropagation using in bubbling after first click to bottom one not goes to upper 
//             //  e.stopPropagation()
//     },false)
//event propagation
// using bubbling effect: means using false in last of eventlistener( from inside to outside or bottom to top)
// using capturingnode:mean using true in last of eventlistener( from  outside to inside or top to bottom)
// document.getElementById('bedroom').addEventListener('click',function(e){
//     e.preventDefault();
//     // e.stopPropagation()
//     console.log("google clicked");

// },false)
document.querySelector('#images').addEventListener('click',function(e){
    // console.log(e.target.tagName);
    if(e.target.tagName==='IMG'){
        console.log(e.target.id);
        let removeIt=e.target.parentNode;
        removeIt.remove()
    }

    
})
// removeIt.parentNode.removeChild(removeIt)

 