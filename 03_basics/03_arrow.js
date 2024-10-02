const user = {
    username : "Sam",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Chhuuut"
// user.welcomeMessage();

//console.log(this);

// function fun() {
//     let username = "Mkc"
//     console.log(this.username);
// }
// fun()

// const temp = function() {
//     const name = "lund"
//     console.log(this.name);
    
// }

// const temp = () => {
//     const name = "lund"
//     console.log(this.name);
// }

// temp();

// const fun = (num1, num2) => { // explicit return 
//     return num1 + num2;
// }

//const fun = (num1, num2) => num1 + num2; // Implicit return 

//const fun = (num1, num2) => (num1 + num2); more readable

const fun = (num1, num2) => ({username : "mayank"}); // For object return, wrap in ()

console.log(fun(2, 3));
