//const tinderUser = new Object() //a singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Rahul"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Rahul",
            lastname: "Ranjan"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4} //using spread operator
//console.log(obj3);

const users = [
    {
        id:1,
        email:"RRj@gmail.com"
    },
    {
        id:1,
        email:"RRj@gmail.com"
    },
    {
        id:1,
        email:"RRj@gmail.com"
    },
    {
        id:1,
        email:"RRj@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//*************** part 2 *****************************
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Rahul"
}

//course.courseInstructor

const{courseInstructor:instructor} = course   //de-structure of object

//console.log(courseInstructor);
console.log(instructor);

// {
//      "name": "Rahul",
//      "coursename": "js in hindi",
//      "price": "free",

    
// }
[
    {},
    {},
    {},
]

