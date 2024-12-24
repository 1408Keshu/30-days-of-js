 //ES6
 // class is a keyWord
// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai =new User("Keshav","Keshav@gamil.com","1231")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// Behind the scene
function User(username,email,password){
    
        this.username=username;
        this.email=email;
        this.password=password;
 }
User.prototype.encryptPassword=function(){
        return `${this.password}abc`;
    }
User.prototype.changeUsername=function(){
        return `${this.username.toUpperCase()}`;
    }
const tea =new User("Badal","Badal@gamil.com","3211")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
