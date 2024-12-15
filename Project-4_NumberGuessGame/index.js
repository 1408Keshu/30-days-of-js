const randomNumber=(parseInt(Math.random()*100 +1)) //Get a random number with math library

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

// console.log(userInput)
const p=document.createElement('p')
let prevGuess=[];
let numGuess=1;
let playGame=true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault(); //prevent from taking value of input to place 
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    // check if number user has given is between 1 to 100 or not or 
    //check if it is invalid or not
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1){
        alert('Please enter a number greater than 1')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
           displayGuess(guess)
           displayMessage(`Game Over,Random number was ${randomNumber} `) 
        }
        else{
            displayGuess(guess);
            check(guess);
        }
    }
}
function check(guess){
    //Check if the input number is equal to number or less or greater than number
    if(guess===randomNumber){
        displayMessage(`Great you guessed it Right,Random number was ${randomNumber}`)
    }
    else if(guess<randomNumber ){
        displayMessage(`Number is sooo Low ,Utha le re baba`)
        // console.log('Tu ja ree')
    }
    else if(guess>randomNumber){
        displayMessage(`Number is much Greater ,Tu ja ree`)
        // console.log('Number is much Greater ,Tu ja ree')
    }
}
function displayGuess(guess){
    //clean guess
    if(numGuess<11){

        userInput.value='';
        // display the previous guess and remaining chances
        guessSlot.innerHTML +=` ${guess} |`
        numGuess++;
        
        remaining.innerHTML=`${11-numGuess}`
    }
    else{

        endGame()
    }
    

}
function displayMessage(message){
    // display message 
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
    userInput.value=''//inputvalue  clear kr di
    userInput.setAttribute('disabled','') //set the disables attribute to empty-> ''
    p.classList.add('button') //add button in p
    console.log('2000')
    p.innerHTML=`<h2 id="newGame" >Start new Game</h2>`
    startOver.appendChild(p); //add p in div of startOver class 
    playGame=false; 
    newGame(); //call start function
}
function newGame(){
    const newGameBtn=document.querySelector('#newGame')
    newGameBtn.addEventListener('click',function(e){
        console.log("Clicked");
        const randomNumber= parseInt(Math.random() * 100 +1);
         prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}
