// Singleton
// object.create

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "mayank",
    [mySym] : "$$",
    age : 18,
    location : "hyderabad",
    email : "mk@gmail.com",
    isLoggedin : false,
    LastLoggedinDays : ["Monday", "Sunday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.age = 20;
//Object.freeze(JsUser) // to avoid the changes
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Greetings");   
}
JsUser.greetingTwo = function() {
    console.log(`Hello MOtherfucker, ${this.name}`);   
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());