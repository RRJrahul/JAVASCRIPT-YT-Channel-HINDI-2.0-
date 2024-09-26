//const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item) => {
//      //console.log(item);
//      return item

// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//     return num > 4  // or we can write simply num > 4
//     } )

// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book One',genre:'Fiction',publish:1981,edition: 2004},
    {title: 'Book two',genre:'non Fiction',publish:1992,edition: 2008},
    {title: 'Book three',genre:'history',publish:1984,edition: 2002},
    {title: 'Book four',genre:'Geography',publish:1992,edition: 2008},
    {title: 'Book five',genre:'Yuma',publish:1987,edition: 2000},
    ];

    let userBooks = books.filter((bk) => bk.genre === 'history')
     userBooks = books.filter((bk) =>{ return bk.publish >= 1980 && bk.genre === "history"})
    console.log(userBooks);
    

