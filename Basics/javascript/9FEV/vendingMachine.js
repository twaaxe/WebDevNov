const options = {
    drink: [
        { name: 'cola', price: 1.5 },
        { name: 'fanta', price: 1.3 },
        { name: 'sprite', price: 1.2 },
        { name: 'water', price: 1.0 },
        { name: 'coffee', price: 2.3 },
        { name: 'tea', price: 2.4 },
    ],
    fastfood: [
        { name: 'hamburger', price: 4.0, label: "hala" },
        { name: 'cheeseburger', price: 4.3, label: "non-halal" },
        { name: 'hotdog', price: 3.5, label: "hala" },
        { name: 'fries', price: 4.3, label: "non-halal" },
        { name: 'chicken nuggets', price: 5.0, label: "hala" },
    ],
    sauces: [
        { name: 'ketchup', price: 0.4 },
        { name: 'mayonnaise', price: 0.4 },
        { name: 'mustard', price: 0.5 },
        { name: 'bbq', price: 0.6 },
        { name: 'garlic', price: 0.6 },
        { name: 'hot sauce', price: 0.6 },
    ],
    desserts: [
        { name: 'ice-cream', price: 0.4 },
        { name: 'cupCake', price: 0.4 },
        { name: 'cake', price: 0.5 },
        { name: 'Fruit', price: 0.6 },
        { name: 'Cheese', price: 0.6 },
        { name: 'Tiramisu', price: 0.6 },
    ]
}
// Create MakeOrder function that takes 3 parameters: drink, fastfood, sauces and returns the total price of the order
// Create displayOrder function that displays the order in the console
// Expected output: You ordered a cola, hamburger with ketchup and the total is 4.5 euro

    const arrayDrink = options["drink"];
    const arrayFood = options["fastfood"];
    const arraySauce = options["sauces"];
    const arrayDessert = options["desserts"]

/*
function MakeOrder(drink, fastfood, sauce){
    //we need a price
    let totalPrice=0;

    //split he whole objet into 3 array by type
    let drinkPrice = 0;
    let foodPrice = 0;
    let saucePrice = 0;
    let commandeObj;
    

    //calculate drink price
    drinkPrice = arrayDrink.find(function (item){
        return item.name === drink}).price
        


    //calculate food price
    foodPrice = arrayFood.find(function (item){
        return item.name === fastfood}).price

     //calculate sauce price
      saucePrice = arraySauce.find(function (item){
        return item.name === sauce}).price


    // displayOrder(drink, fastfood, sauce)
    totalPrice = foodPrice + drinkPrice + saucePrice 

    commandeObj = {
        drink : drink,
        food : fastfood,
        sauce : sauce,
        commandePrice : totalPrice
    }

    // displayOrder(commandeObj)
    return commandeObj;
    
}


function displayOrder(obj){
    console.log(`You have ordered ${obj.drink}, ${obj.food} with ${obj.sauce} for a total of ${obj.commandePrice}`)

}


displayOrder(MakeOrder("tea", "hotdog", "mustard"));

*/






function orderMaking(drink, food, sauce){
    
    let drinkPrice = options.drink.find(function(item){
        return item.name == drink
    })

    let foodPrice = options.fastfood.find(function(item){
        return item.name == food
    })

    let saucePrice = options.sauces.find(function(item){
        return item.name == sauce
    })

    let totalPrice = drinkPrice.price+ saucePrice.price + foodPrice.price;
    const obj = {
        drink,
        food,
        sauce,
        totalPrice
    }

    return obj;
    // console.log(drinkPrice, foodPrice)
}


function dispayOrder(order){
    console.log(`you ordered a ${order.drink} with a ${order.food} and ${order.sauce} as sauce for a total of ${order.totalPrice}`)
}

dispayOrder(orderMaking("tea", "hotdog", "mustard"));




function ListOfHalalFood(term) {
    // display halal food out
    // hint: filter
    return options.fastfood.filter(product=>product.label===term)
}

console.log(ListOfHalalFood('non-halal'))
console.log(ListOfHalalFood('halal'))

function displayDessert(){
    arrayDessert.forEach(function (item){
        console.log(item.name)
    })
}

displayDessert();