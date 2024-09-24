let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//let create = new Date(2024, 0, 1, 5, 10);
let create = new Date("01-09-2023");
console.log(create.toLocaleString());

let Stamp = Date.now();
console.log(Stamp);
console.log(create.getTime());

let newDate = new Date();
console.log(newDate.toLocaleDateString('default', {
    weekday : 'long'
}))
//console.log(newDate.toLocaleDateString());

