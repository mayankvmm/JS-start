const myNums = [1, 2 ,3]

// const tot = myNums.reduce( function(acc, curVal) {
//     console.log(`acc : ${acc} , &curVal : ${curVal}`);
//     return acc + curVal
// }, 4)

const tot = myNums.reduce( (acc, val) => acc+val, 0 )

console.log(tot);

const shopCart = [
    {
        course : "JS",
        price : 999
    },
    {
        course : "py",
        price : 999
    },
    {
        course : "backend Dev",
        price : 4999
    },
    {
        course : "Cohort",
        price : 3999
    }
]

const totPrice = shopCart.reduce( (acc, obj) => acc + obj.price, 0 );
console.log(totPrice);

