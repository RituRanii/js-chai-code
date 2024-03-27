# Projects related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-frq5ac?file=index.html)

# solution code
## Project 1

```Javascript 
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target="grey"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target="white"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target="blue"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target="yellow"){
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2

```Javascript
const form = document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  if(height === ''|| height<0 || isNaN(height)){
    results.innerHTML = "Please give valid height"
  } else if(weight === ''|| weight<0 || isNaN(weight)){
    results.innerHTML = "Please give valid weight"
  } else{
    const BMI = (weight/((height*height)/10000)).toFixed(2);
    //result
    results.innerHTML = `<span>${BMI}</span>`
  }
});
```

## Project 3

```javascript
const clock = document.querySelector('#clock')
setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```

## Project 4
```javascript
let randomnumber = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const Gusses = document.querySelector('.guesses');
const LastResult = document.querySelector('.lastResult');
const LoworHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let num = 1

let playGame = true
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(UserInput.value)
    console.log(guess);
    validateGuess(guess);
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter valid number');
  }else if(guess<1){
    alert('Please enter valid number more than 1');
  }else if(guess>100){
    alert('Please enter valid number less than 100');
  }else{
    prevGuess.push(guess);
    if(num === 11){
      displayGuess(guess);
      displayMessage(`Game Over. random number was${randomnumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess){
  if(guess===randomnumber){
    displayMessage(`Guessed it right`);
    endGame();
  }else if(guess<randomnumber){
    displayMessage(`number is too low`);
  }else if(guess>randomnumber){
    displayMessage(`number is too high`);
  }
}
function displayGuess(guess){
  UserInput.value = ''
  Gusses.innerHTML += `${guess}  `;
  num++;
  LastResult.innerHTML =`${11-num}`;
}
function displayMessage(message){
  LoworHigh.innerHTML=`<h2>${message}</h2>`;
}
function endGame(){
  UserInput.value='';
  UserInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id = 'newgame'>Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame(){
  const newGameBtn = document.querySelector('#newgame')
  newGameBtn.addEventListener('click',function(e){
    randomnumber = parseInt(Math.random()*100+1);
    prevGuess = [];
    num = 1;
    Gusses.innerHTML = '';
    LastResult.innerHTML =`${11-num}`;
    UserInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
  })

}
```
## project 5
```javascript
console.log('Project 5');
const insert = document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
   </table>
  </div>
  `
})

```
## Project 6
``` javascript
//generate random color
const randomcolor = function(){
  const hex = "0123456789ABCDEF";
  let color = '#';
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
};
let intervalId;
// console.log(randomcolor());
const startChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(changebg,800);
  }
  function changebg(){
    document.body.style.backgroundColor=randomcolor();
  }
};
const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null;
}
document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)

```