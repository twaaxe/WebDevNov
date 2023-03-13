const burgerKing = (food, drink, sauce)=> {

    return new Promise((resolve, reject)=>{

        let foodBol = food.match(/\d/g)==null
        let drinkBol = drink.match(/\d/g)==null
        let sauceBol = sauce.match(/\d/g)==null

        if(foodBol && drinkBol && sauceBol){
        
            resolve({
                food: food,
                drink: drink,
                sauce : sauce
            })
        
        } else {
            reject("food, drink or sauce can not be a number")
        }
    }) 
}


burgerKing("salad", "coke", "ketchup")
.then(result=>{
    console.log(result)
})
.catch(err=>console.log(err))



