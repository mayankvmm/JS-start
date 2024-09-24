const myArr = [0, 1, 2, 3, 4];
console.log(typeof myArr);

// myArr.push(8);
// myArr.pop();
// console.log(myArr);

myArr.unshift(9);
console.log(myArr);
myArr.shift();
console.log(myArr);
// More functions :
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(typeof newArr);
console.log(``);

// slice, splice
console.log('Slicing', myArr.slice(1, 4));
console.log('A', myArr);

console.log('Splicing', myArr.splice(1, 3));
console.log('B', myArr);



