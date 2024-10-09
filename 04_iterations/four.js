// const lang = ['js', 'c++', 'java', 'python']

// const values = lang.forEach( (item) => {
//    // console.log(item);
//     return item ;
// } )
// console.log(values);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// using Filter
const newNums = nums.filter( (item) => item > 5 )

// same thing using forEach
// const newNums = []
// nums.forEach( (item) => {
//     if (item > 5) {
//         newNums.push(item)
//     }
// } )

console.log(newNums);
