// const myArr1 = [0,1,2,3,4,5,true,"ritu"]
// Javascript array copy operations create shallow copies
// Shallow copy of an object share the same reference point , deep copy is opposite
const myArr = [0,1,2,3,4,5]
// const myHeros = ["ray","nick"]
// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);

// // methods
// myArr.push(10)
// console.log(myArr);

// myArr.unshift(90)
// console.log(myArr);

const myn1 = myArr.slice(1,3)
console.log("A",myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log("B",myArr);
console.log(myn2);


