const num = 123;
console.log(typeof num);

const score = new Number(234);
console.log(typeof score);

console.log(score.toString().length);
console.log(score.toFixed(1));

const other = 3214.4321;
console.log(other.toPrecision(6));
const hund = 1000000;
//console.log(hund.toLocaleString('en-IN'));

// +++++++++++ Maths ++++++++++++
// functions like round, ceil, floor etc;

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);







