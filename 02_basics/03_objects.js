//object literals
//Object.create()

const mySym = Symbol("key1")
//console.log(typeof mySym);

const JsUser = {
    name: "Ritu",
    "full name":"Ritu Rani",
    [mySym]: "mykey1",
    age: 23,
    email: "ritu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
} 
//empty object
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.full name);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "ruseh@yahoo.com"
//Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting);
JsUser.greetingtwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());