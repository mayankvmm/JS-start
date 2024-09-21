//By Value (Primitive)
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100;
const IsLoggedin = false;
const temp = null;
let userEmail;

const Id = Symbol("123");
const AnotherId = Symbol("123");

console.log(Id === AnotherId);

const bigNumber = 43789120083443437895467n;

// Reference (Non-Primitive)
//  Array, Objects, functions

const heroes = ["spiderman", "superman", "batman"];

let obj = {
    name : "lauda",
    age : 22,
}

const myFunction = function() { 
    console.log("HelloMotherFucker");
} 

console.log(typeof temp)