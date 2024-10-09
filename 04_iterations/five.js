const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.map( (item) => {return item + 10} )

const newNums = nums
                .map( (item) => item*10 )
                .map( (item) => {return item + 1} )
                .filter( (item) => {return item > 60} )

console.log(newNums);
