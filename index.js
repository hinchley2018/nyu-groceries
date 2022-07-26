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

let myHandObjs = [
    { number: 7,  suit: 'Clubs'},
    { number: 6, suit: 'Spades'},
    { number: 8, suit: 'Spades'},
    { number: 9, suit: 'Hearts'},
    { number: 2, suit: 'Hearts'},
]
//get the first card
let highestCard = myHandObjs[0]
//initializer; condition; iterator
for (let index = 0; index < myHandObjs.length; index++){
    //for loop body is stuff in {}
    console.log( `at myHandObjs[${index}] the card is:`, myHandObjs[index])
    //if the number that I'm at is bigger keep it in highest number variable
    console.log("comparing", myHandObjs[index],highestCard)
    //to compare the cards what to do?
    //lets look at the number property on each
    //console.log(myHandObjs[index].Number) //if property is mis-capitalized or mispelled that property is undefined
    if (myHandObjs[index].Number > highestCard.number){
        highestCard = myHandObjs[index]
        console.log(myHandObjs[index], "is now the biggest card")
    }
}

let groceryObjs = [
    {name: "tomatoes",price: 2.99 },
    {name: "potatoes",price:  1.37 },
    {name: "pasta", price: .99},
]
console.log("groceries",groceryObjs)
//calcuate the total cost of groceries

let totalCost = 0
//go through the length of groceries
    //each item add grocery item's price to totalCost
for (let index = 0; index < groceryObjs.length; index++) {
    const groceryItem = groceryObjs[index];
    console.log("groceryItem", groceryItem)
    totalCost = totalCost + groceryItem.price
}

// alert(`Jonathon please pay ${totalCost}`)

let tickets = [
    {
        airline: "delta",
        class: "first-class",
        price: 74
    },
    {
        airline: "delta",
        class: "economy",
        price: 65
    },
    {
        airline: "delta",
        class: "coach",
        price: 54
    }
]

let airlineExpenses = [
    {
        item: "fuel",
        cost: 7000
    },
    {
        item: "crew-salary",
        cost: 2000
    }
]

//calculate the profits of these tickets
let totalTicketProfits = 0
for (let index = 0; index < tickets.length; index++) {
    const currentTicket = tickets[index];
    totalTicketProfits = totalTicketProfits + currentTicket.price
}
console.log("totalTicketProfits",totalTicketProfits)

let totalExpenses = 0
for (let index = 0; index < airlineExpenses.length; index++) {
    const currentExpense = airlineExpenses[index];
    totalExpenses = totalExpenses + currentExpense.cost
}
console.log(totalTicketProfits - totalExpenses)