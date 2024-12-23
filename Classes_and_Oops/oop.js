const user={
    userName:"Keshav",
    loginCount:8,
    signIn:true,
    getUserDetails:function(){
        console.log("Got user details from database")
        console.log(`username: ${this.userName}`)
        console.log(this)
        // use of this => current Context

    }
}
// console.log(user.userName)
// console.log(user.signIn)
// console.log(user.getUserDetails())
// console.log(this)

// new is instance constructor
// const promiseOne=new Promise()
// const date=new Date();
function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
// leftside  variable |right side jo pass kr ke de rahe ho
    
this.greeting=function(){
    console.log(`Welcome ${this.username}`);
}
    return this
}
// const userOne=User("keshav",12,true);
// const userTwo=User("Shubham",32,false);
// userTwo will override userOne 
// so we user new keyWord
const userOne=new User("keshav",12,true);
const userTwo=new User("Shubham",32,false);

console.log(userOne.constructor);
// console.log(userTwo.username);

