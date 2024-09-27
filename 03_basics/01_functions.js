function fun(val1, ...num1) {
    return num1
}
console.log(fun(1, 20, 300));

user = {
    name : "honeyPie",
    keemat : 999
}
function handleObject(randomObj) {
    console.log(`name is ${randomObj.name} and price ${randomObj.keemat}`);
}
//handleObject(user);
handleObject ({
    name : "honeyPie",
    keemat : 999
})

const newArr = [10, 69, 66, 999]
function secondVal(myArr) {
    return myArr[1];
}
console.log(secondVal(newArr));