const user = {
    username: "Rahul",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
       // console.log(this);//this talk about current context

    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username = "Rahul"
//     console.log(this.username);
// }
//chai()

// const chai = function(){
//     let username = "Rahul"
//     console.log(this.username);
// }
// chai()
const chai = () => {     //arrow function
    let username = "Rahul"
    console.log(this);
}
//chai()

// const addTwo = (num1,num2) => {
//     return num1+num2    //implicit return
// }

//const addTwo = (num1, num2) => num1+ num2

//const addTwo = (num1, num2) => (num1+ num2) //explicitly return
const addTwo = (num1, num2) => ({username:"Rahul"})
console.log(addTwo(3,4));







