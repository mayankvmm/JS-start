const a = 300
let b = 20
var c = 10

if (true) {
    const a = 1
    let b = 2
    //var c = 3 // already been declared
    console.log(a, b, c);
}   

function one() {
    const username = "Jethalal"

    function two() {
        const website = "qorno"
        console.log(username);
    }
    //console.log(website);

    two()    
}
one()

// ++++++++++++ New Bakchodi ++++++++++++++
console.log(AddOne(5));
function AddOne(num1) {
    return num1 + 1
}

// This givess error
//console.log(number2(8));
const number2 = function AddTwo(num2) {
    return num2 + 2
}

