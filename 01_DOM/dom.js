const title=document.getElementById('title');
// console.log(title.title);
console.log('hello');
console.log(title.innerText);
console.log(title.textContent);
console.log(title.innerHTML);
// learning aboutQuerry querySelector
document.querySelector('h1').style.color='lightblue'
document.querySelector('#title').style.color='blue'
document.querySelector('p').style.color='lightgreen'

const list=document.querySelector('li');
console.log("querySelector")
console.log(list);
const listALL=document.querySelectorAll('li');
console.log("querySelectorALL")
console.log(listALL[0]);
listALL.forEach(function(l){
    console.log(l)
})
const tempClassList=document.getElementsByClassName('list')
console.log(tempClassList);
// So to use tempClassList in foreach loop we need to first convert it into an Array
const converted=Array.from(tempClassList)
console.log(converted)
converted.forEach(function(li) {
    li.style.color='orange'  ;
    li.style.background='green';
    li.style.padding="10px ";

  })