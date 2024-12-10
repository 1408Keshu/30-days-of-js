    // Creation of Element in JavaScript
    const div=document.createElement('h2')
    console.log(div)
    div.className="Main"
    div.id= Math.round(Math.random()*10 + 1 );
    console.log(div.id)
    div.setAttribute("title","generated title")
    div.style.backgroundColor="orange"
    div.style.color="white"
    div.style.padding="12px"
    div.innerHTML="creating a new Element"
    const addtext=document.createTextNode("create Element")
    // div.appendChild(addtext)
    document.body.appendChild(div)
