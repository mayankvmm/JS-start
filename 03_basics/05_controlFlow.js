// === & !== operator
let temp = "40"

if (temp === "30") {
    console.log("=== operator");
    
}
if (temp !== 40) {
    console.log("!== operator");
}

if (true) console.log("Execute1"), console.log("Execute2");

// Switch case
const month = 2;
switch (month) {
    case 1:
        console.log("Jan");
        break;

    case 2:
        console.log("Feb");
        break;

    case 3:
        console.log("March");
        break;

    default:
        console.log("Rest months");
    
        break;
}

// Falsy values
// 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values
// " ", [], {}, function() {}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) { // length is an array function
    console.log("Empty Object");
}

// Nullish Coalescing Operator (??) : null undefined
let val;
// val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? 1;
val = null ?? 5 ?? 10
console.log(val);

const price = 99
price >= 100 ? console.log("price is greater 100") : console.log("price is under 100");

