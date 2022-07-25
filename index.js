console.log("hello from script")

let groceries = [
    "tomatoes", //2.99 /lb
    "potatoes", // 1.37 /lb
    "pasta" //.99
]
console.log("groceries",groceries)

//go through my groceries
for(let i = 0; i < groceries.length; i++ ){
    console.log(`grocery ${groceries[i]} at index ${i}`)
}

//search for highest number
let myHand = [7, 6,8,9,2]

//initializer; condition; iterator
for (let turns = 100; turns < 100; turns++){
    //for loop body is stuff in {}
    console.log("turn #", turns)
}


//start with first number
let highestNumber = myHand[0]

//initializer; condition; iterator
for (let index = 0; index < myHand.length; index++){
    //for loop body is stuff in {}
    console.log(`card ${myHand[index]} is at myHand[${index}]`)
    //if the number that I'm at is bigger keep it in highest number variable
    console.log(`comparing ${myHand[index]} to ${highestNumber}`)
    if (myHand[index] > highestNumber){
        highestNumber = myHand[index]
        console.log(`card ${myHand[index]} is now the biggest number`)
    }
}