const promiseOne = new Promise(function(resolve,reject){
    //DO an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log("Async is complete")
        resolve() //to connect with then function
    },1000)
})
// resolve ka connection hai '.then' ke sath 
promiseOne.then(function(){
    console.log("Promised Consumed");
    //ye promise ke resolve run hone ke baad ayega
})
//Now witout any other variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },2000)
}).then(function(){
    console.log("Async 2 resolved");
})
//Callback promise
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        //passing parameters through resolve
        resolve({username:"chai",email:"kalu@gmail.com"})
    },3000)
})
promiseThree.then(function(user){
    console.log("Async 3 resolved")
    console.log(user);
})
//promise 4
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;//also check with false
        if(!error){
            resolve({username:"keshav" ,password:"3342"})
        }
        else {
           reject("ERROR: Something went wrong");
       }
    },4000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{ //chaining
    console.log(username);
}).catch(function(error){
    console.log(error);
})//finally is default and give give something at last 
.finally(()=>console.log("The promise either resolve or rejected"))

//promise 5
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Badal" ,password:"1332"})

        }else{
            reject('Error: Name is entered is Invalid')
        }
    }, 5000);
})
// async wait is like then,catch
//which will wait for promise to resolve or reject 
//but Async Await can not directly handle ERRORS
async function consumePromiseFive() {
    try{
        const response=await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()
async function getAllUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        // so converting data into json also takes time so we need to put that function in await
        console.log(response);
        const data= response.json() //converting string data to json format
        // const data=await response.json();
        console.log(data);
    }
catch(error){
    console.log("E: ",error);
}
}
getAllUsers();