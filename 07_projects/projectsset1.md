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