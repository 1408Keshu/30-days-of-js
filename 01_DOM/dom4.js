function addLanguage(langName){
    const li=document.createElement('li');
    li.innerHTML=`${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("Python")
addLanguage("typescript");
function addOptiLanguage(langName){
    const li=document.createElement('li') //create an list element li
    const addText=document.createTextNode(langName) //take language Name as addText 
    li.appendChild(addText) //append addtext in li element
    document.querySelector('.language').appendChild(li) // attching that element in ul className(language) 
}
addOptiLanguage("GOLang")
//more optimise than the previous one as no need to traverse in all tree just appendchild inside the element

//Edit
const secondLang=document.querySelector("li:nth-child(2)")
// secondLang.innerHTML="Mongo"
const newli=document.createElement('li')
newli.textContent="manga db"
secondLang.replaceWith (newli)
//edit
const first=document.querySelector('li:first-child')
first.outerHTML='<li>TypeScript</li>'
//remove
const lastName=document.querySelector('li:last-child')
langName.remove()