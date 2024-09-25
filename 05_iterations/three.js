//for of

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

//Maps 
const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of america")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);
// for (const key of map) {
//     console.log(key,':-',value);
// }

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
for (const [key,value] of myObject) {
    // these methods are not used for iterable of object,we can use it for iterable of map as well.//
       console.log(key,':-',value);
}
