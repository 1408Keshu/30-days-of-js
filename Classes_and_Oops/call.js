function SetUsername(username){
    //complex DB calls
    this .username=username
    console.log("called")
}
function createUser(username,ElementInternals,password){
    // call hamara current exexution context kisi aur ko pass kr deta hai 
    
    SetUsername.call(username)
    // to hold the reference we use .call
    // Now we are using this 
    SetUsername.call(this,username)
    this.email=email
    this.password=password
}
const chai=new createUser("keshav","zopr@fb.com","1214")
console.log(chai)