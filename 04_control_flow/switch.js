// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("JAN");
        break;
    case 2:
        console.log("FEB");
        break;
    case 3:
        console.log("MAR");
        break;
    case 4:
        console.log("APR");
        break;
    default:
        console.log("default not macked");
        break;
}

// falsy values : false, 0, -0, BigInt 0n,"",null,undefined,NaN
// truthy values : "0", 'false', " ",[],{},function(){}

// Nullish Coalescing Operator(??): null undefined
let val1;
val1 = null??10
// val1 =5??10
console.log(val1);
// terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("high price") : console.log("low price")
