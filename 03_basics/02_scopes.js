var c =300
if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
console.log(c);
function one(){
    const username = "ritu"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    two()
}
one()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));
function addone(value){
    return value + 1
}
// console.log(addone(5));

addTwo(5)//hoisting 
const addTwo = function(num){
    return num + 2
}
