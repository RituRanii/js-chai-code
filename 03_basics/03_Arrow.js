const user={
    username:"ritu",
    price:123,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
console.log(this);//{empty object}

const chai = () =>{
    let user = "ritu"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => num1 + num2 //implicit statement
console.log(addTwo(2,5));

// const muArray = [2,3,5,8,9]
// muArray.forEach(function() {}) or ()=>()