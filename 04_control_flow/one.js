// if
// if (2==2) {
//     console.log("trueee");
// }

const temperature = 41
if (temperature<50) {
    console.log(`temperature is less than 50`);
} else{
    console.log(`temperature greater than 50`);
}

const score = 200
if (score>100) {
    const power = "fly"
    console.log(`user power : ${power}`);
    
}


const balance = 1000
 
// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 950){
//     console.log("less than 950");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = false
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
} else{
    console.log("Not allowed to buy the course");
}