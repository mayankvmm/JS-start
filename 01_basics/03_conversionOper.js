let val = "123"

console.log(typeof val)
let valueInVal = Number(val)
console.log(typeof valueInVal)

val = "123ads"
valueInVal = Number(val)
console.log(typeof valueInVal)
console.log(valueInVal)

val = null
valueInVal = Number(val)
console.log(typeof valueInVal)
console.log(valueInVal)

val = undefined
valueInVal = Number(val)
console.log(typeof valueInVal)
console.log(valueInVal)

/*
In boolean conversion
    if 0 or null value it converts to false
    else true
*/

/***OPERATIONS***/ 
console.log("1" + 2);
console.log(1 + "2")

console.log("1"+2+2)
console.log(1+2+"2");

//Not Important
console.log(+true);
console.log(+"");