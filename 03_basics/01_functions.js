// console.log("H");
// console.log("u");
// console.log("t"); time consuming process
function SaymyNamr() {
    console.log("H");
    console.log("H");
    console.log("H");
}
//SaymyNamr()

// function addTwoNumbers(Number1, Number2){//parameetere
//     console.log(Number1 + Number2);
// }
function addTwoNumbers(Number1, Number2){//parameetere
    // let result = Number1 + Number2
    // return result
    return Number1+Number2
}

// const result = addTwoNumbers(3,5)
// console.log("Result",result);
//addTwoNumbers(4,5)//arguments

// function logInUserMessage(username) {
//     return `${username} just logged in`
// }
// console.log(logInUserMessage("ritu"))

function logInUserMessage(username = "exception"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage());
// console.log(logInUserMessage("ritu"));

function calculateCartPrice(...num1){//rest and spread operator
    return num1
}
//console.log(calculateCartPrice(200,400,500));

const user = {
    username: "ritu",
    price:129
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)