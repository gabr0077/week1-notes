let person = {
   name: "Gabr",
    age: 36,
    songslist: [
      "one way or another",
       "in da club",
       "Yeah",
       
    ]
};
console.log(person.songslist)



// activity1 

const person1 = {
name: "gabr",
age: "36",
hobbies: "running",
movies: [
"close margin",
"green zone",
"training day"
      ],

    
    sayHi() {
      console.log(`hello my name is ${this.name}`)
    }
    }
    
    person1.sayHi();
    
       // acctivityy 2

       let pet = {
          name: 'brozy',
          typeOfPet: 'german shaperd',
          age: 3,
          colour: 'golden balck',
          eat(){
              return `${this.name} is eating`
          },
          drink(){
              return `${this.name} is drinking`
          }
        };
        
        // console.log(pet.drink())
        console.log(pet.eat())
        


       // activity 3 


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