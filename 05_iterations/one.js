//for
for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
      //  console.log("5 is best no.");
        
    }
   // console.log(element);
    
}
//console.log(element); element is defined within the for loop scope,we cann't access it outside the loop

for (let i = 0; i < 10; i++) {
   // console.log(`outer loop value:${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        //console.log(`${i} * ${j} = ${i*j}`); method 1
       // console.log(i + '*' + j + '=' + i*j);method 2
        
         }
    
}
let myArray = ["Flash","batman","superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
}

//break and continue
// for (let index = 1; index < 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }
for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
}








