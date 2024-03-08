// Immediately Invoked Function Expression(IIFE)


(function chai(){
    console.log(`DB connected`);
})();
// chai() global scope ke pollution ko avoid karne keliye use hota hai
( ()=>{
    console.log(`DB CONNECTED TWO`);
})();

