const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc , currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0 )

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)
console.log(myTotal);

const shoppingCart =[
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"data science",
        price: 9999
    },
    {
        itemName:"Machine Learning",
        price: 2999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(priceToPay);
