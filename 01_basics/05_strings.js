const name = "Ritu"
const repoCount = 24
// console.log(name + " " + repoCount + " Value");
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);//string interpolation
const gameName = new String('ritu')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,3)
console.log(newString);

const newString1 = gameName.slice(-4,2)
console.log(newString1);

const newString2 = "  ritu  "
console.log(newString2);
console.log(newString2.trim());

const url = "https://ritu.com/ritu%20rani"
console.log(url.replace('%20','-'));

console.log(url.includes('ritu'));