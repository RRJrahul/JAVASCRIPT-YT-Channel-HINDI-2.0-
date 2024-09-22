function sayMyName(){
    console.log("R");
    console.log("a");
    console.log("m");
}
//sayMyName()

function addTwoNumber(number1 , number2){
    console.log(number1+number2);
}
// addTwoNumber(4,3)
// addTwoNumber(4,"3")
// addTwoNumber("4","3")
// addTwoNumber(4,null)

function addTwoNumber(number1 , number2){
    // let result = number1+number2
    // return result
    return number1 + number2

}

const result = addTwoNumber(3,5)
//console.log("Result :",result);

function loginUserMessage(username){
    if(username === undefined){ //if(!username)
        console.log("plss enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Rahul"));
//console.log(loginUserMessage("Ranjan"));

//part 2
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Rahul",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

}
//handleObject(user)
handleObject({
    username: "Rahul",
    price: 399

})
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));

