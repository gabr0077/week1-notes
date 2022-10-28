// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasspecialoffers: true,
//     drinks:[
//     "Cappuccino"
//     "latte"
//     "Tea"
//     "Hotchocolate"
//     ]
// };
// console.log 

//let person = {
  //  name: "Gabr",
    //age: 36,
    //songslist: [
      // "oneay or another",
       //"in da club",
       //"Yeah",
       
    //]
//};
//console.log(person.songslist)

let coffeeShop2 = {
    branch: 'Costa',
    drinksList: ['Coffee', 2.50, 'Tea', 1.50, 'Hot Chocolate', 3],
    foodList: ['Croissant', 3.50, 'Sandwich', 2],
    drinksOrdered(drink){
        let order = ''
        let cost = 0
        for(let i = 0; i < drink.length; i++){
            let indexOfItem = this.drinksList.indexOf(drink[i])
            if(indexOfItem !== -1){
                order += `\n= ${drink[i]} Â£${this.drinksList[indexOfItem + 1]} =`
                cost += this.drinksList[indexOfItem + 1]
            }
        }
        return `\nDrink  ${order}\nCost  -  Â£${cost}\n`
    },
    foodOrdered(food){
        let order = ''
        let cost = 0
        for(let i = 0; i < food.length; i++){
            let indexOfItem = this.foodList.indexOf(food[i])
            if(indexOfItem !== -1){
                order += `\n= ${food[i]} Â£${this.foodList[indexOfItem + 1]} =`
                cost += this.foodList[indexOfItem + 1]
            }
        }
        return `\nFood  ${order}\nCost  -  Â£${cost}\n`
    }
  }
  
  console.log(coffeeShop2.foodOrdered(['Croissant', 'Sandwich']), coffeeShop2.drinksOrdered(['Coffee', 'Tea']))