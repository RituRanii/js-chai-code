//Primitive
//7 categories : String ||  Number || Boolean || Null || Undefined || Symbol || BigInt 

//dynamically typed

// Reference 
//Array, Objects, Functions
const heros = ["ritu", "rani", "moha"]
let myObj = {
    name: "ritu",
    age: 23,
}
const myFunction = function () {
    console.log("hello");
}

//stack(primitive) Heap(Non-Primitive)
let myYoutubename = "rituranii"
let another = myYoutubename
another = "chai"
console.log(myYoutubename);
console.log(another);