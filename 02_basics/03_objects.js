//singleton 

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Rahul",
    "full name":"Rahul Ranjan",
    [mySym]: "mykey1",
    age:22,
    location:"Rosera",
    email :"Rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["name"]);
// console.log(jsUser.name);
// console.log(jsUser[mySym]);

jsUser.email = "Rahul@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email= "Rahul@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);//string interpolation
}

console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());