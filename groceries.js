console.log("hello from groceries.js")
let jonathonObjs = [
    {name: "tomatoes",price: 2.99, weighLbs: 2.5 },
    {name: "pasta", price: .99, weighLbs: 3.5},
]

let angelObjs = [
    
    {name: "potatoes",price:  1.37, weighLbs: 1.7 },
    {name: "pasta", price: .99, weighLbs: 3.5},
]

let michaelObjs = [
    {name: "tomatoes",price: 2.99, weighLbs: 2.5 },
    {name: "potatoes",price:  1.37, weighLbs: 1.7 },
]

let robertObjs = [
    
    {name: "pasta", price: .99, weighLbs: 3.5},
]

//calculate weight recipe definition
function calcuateWeight(groceryObjs){
    let totalWeight = 0
    for (let index = 0; index < groceryObjs.length; index++) {
        const groceryItem = groceryObjs[index];
    
        totalWeight = totalWeight + groceryItem.weighLbs
        
    }
    
    return totalWeight
}


//calculate price recipe definition
function calculatePrice(groceryObjs){
    let totalPrice = 0
    for (let index = 0; index < groceryObjs.length; index++) {
        const groceryItem = groceryObjs[index];
    
        totalPrice = totalPrice + groceryItem.price
        
    }
    return totalPrice
}



console.log("jonathon, your total weight of groceries",calcuateWeight(jonathonObjs))
console.log("jonathon, your total weight of groceries",calculatePrice(jonathonObjs))

console.log("angel, your total weight of groceries",calcuateWeight(angelObjs))
console.log("angel, your total weight of groceries",calculatePrice(angelObjs))

console.log("michael, your total weight of groceries",calcuateWeight(michaelObjs))
console.log("michael, your total weight of groceries",calculatePrice(michaelObjs))

console.log("robert, your total weight of groceries",calcuateWeight(robertObjs))
console.log("robert, your total weight of groceries",calculatePrice(robertObjs))
