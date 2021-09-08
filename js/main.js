let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(`Person3 has like both options of: ${person3.pizza[0]} and ${person3.pizza[1]}`)
console.log(`Person 3 is open to tacos but: ${person3.tacos}`)
console.log(`Person3's favorite spot for burgers: ${person3.burgers}`)
console.log(`Person3's 3 favorite ice cream flavors: ${person3.ice_cream[0]}, ${person3.ice_cream[1]} and ${person3.ice_cream[2]}`)
console.log(`Let's talk shakes: 
oberwise-${person3.shakes[0].oberwise},
dunkin-${person3.shakes[0].dunkin},
culvers-${person3.shakes[0].culvers}
McDonalds-${person3.shakes[0].mcDonalds}
Cupids Candies-${person3.shakes[0].cupids_candies}`)

class Person{
    constructor(name, age){
    this.name = name;
    this.age = age;
}
    printInfo = () => {
        return `Hello my name is: ${this.name} and I am ${this.age} years old.`
    }
    count_up = (function() {
        return function () {
            return this.age ++
        }
    }) ()
}
        

let bowie = new Person('David', 69);
console.log(bowie.printInfo() )

let piccolo = new Person('Piccolo', 753);
console.log(piccolo.printInfo(), piccolo.count_up(), piccolo.count_up(), piccolo.count_up())

const checkTen = (this_string) => {
    return new Promise( (resolve, reject) => {
        if (this_string.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

checkTen("This is a long string")
.then( (result) => {
    console.log(`Long string: ${result}`)
})

.catch( (error) => {
    console.log(`Short String: ${error}`)
})