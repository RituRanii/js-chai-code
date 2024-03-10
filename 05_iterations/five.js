coding = ["js","rubu","c++","c","java","python"]
// const values = coding.forEach((item)=>{
//     return item
// })
// console.log(values);

const muNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = muNums.filter((num)=>{
//     num>4
// })
const newNums = muNums.filter((num)=>num>4)
// console.log(newNums);

const nums = muNums
            .map((num)=>num+10)
            .map((num)=>num+1)
            .filter((num)=>num>=40)
console.log(nums);


//reduce
const array1 = [1,2,3,4,5]
//0+1+2+3+4+5
const initalvalue = 0;
const sumWithInitial = array1.reduce((accumulator,currentValue)=>accumulator+currentValue,initalvalue);
console.log(sumWithInitial);