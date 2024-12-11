function addLanguage(langName){
    const li=document.createElement('li');
    li.innerHTML=`${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("Python")
addLanguage("typescript");
function addOptiLanguage(langName){
    const li=document.createElement('li')
    const addText=document.createTextNode(langName)
    li.appendChild(addText)
    document.querySelector('.language').appendChild(li)
}
addOptiLanguage("GOLang")