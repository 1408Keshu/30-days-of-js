let myName="keshav"
let mychannel="Korplz"

// console.log(myName.trueLength);
let myHeros=["thor","spiderman"]

let heroPower={
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.keshav=function(){
    console.log(`keshav is present in all hearts`)
}
Array.prototype.heyKeshav=function(){
    console.log(`Keshav says Hello`)
}
// heroPower.getSpiderPower()
// heroPower.keshav()
// heroPower.heykeshav()

// prototype inheritance
const User={
name:"badal",
email:"badli@google.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TaSupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="KaluKaluti     "
String.prototype.trueLength=function(){
    console.log(`${this}`); //refereneve to KaluKaluti
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength();
"keshav".trueLength();
"IceTea".trueLength();