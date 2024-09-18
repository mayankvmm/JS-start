const accountId = 2345
let accountEmail = "mk@google.com"
var accountPass = "1234"
accountCity = "noida" // not recommended
let accountState;

//accountId = 4321
/*
var is not prefferd to use
because of issue in block scope and functional scope
*/
if (true) {
    let accountEmail = "casa@gmail.com"
    var accountPass = "321"
    console.log(accountEmail);
    console.log(accountPass);
}

console.table([accountId, accountEmail, accountPass, accountCity, accountState]);