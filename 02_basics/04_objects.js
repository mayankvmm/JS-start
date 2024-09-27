// const tinderUser = new Object(); this is singleton
const tinderUser = {}
tinderUser.name = "bakchod"
tinderUser.id = "123abc"
tinderUser.loggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "Raand@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Lauda",
            surname : "Lassan"
        }
    }
}
//console.log(regularUser.fullname.userfullname);

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "a", 4: "b"}
const obj3 = {5 : "a", 6: "b"}

// const obj3 = {obj1, obj2}
//const obj4 = Object.assign({}, obj1, obj2, obj3) //Object.assign(obj1, obj2) this  will merge all in obj1.
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

// array of objects
const user = [
    {
        name : "Madar",
        id : "123adsa"
    },
    { 
        name : "Madar",
        id : "123adsa"
    },
    {
        name : "Madar",
        id : "123adsa"
    }
]
//console.log(user[1].name);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));

const course = {
    coursename : "100xdevops",
    price : "999",
    courseInstructor : "harkirat"
}
const {courseInstructor : instruct} = course
console.log(instruct);
