const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello maaam"
for (const greet of greetings) {
    if(greet == ' '){
        continue
    }
    console.log(`Each char is ${greet}`);
}

//map
const map = new Map()
map.set('IN','India')
map.set('USA','Unites stated of america')
map.set('Fr','France')

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
}

const Object = {//not iterable
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const [key,value] of Object) {
    console.log(key,':-',value);
}
