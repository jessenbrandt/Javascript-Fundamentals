console.log(scissors)
var scissors = "pink scissors"
// undefined because it needs to be defined before logged
// console.log(scissors)
// console.log(cats)
let cats = "the best"
//let makes you declare first
// console.log(dogs)

const dogs = "pretty good"

/*
Let and const do not get "hoisted" - you can only use them after you declare them. This is a good thing for intentional programming.
*/

hiTom()
//function

function hiTom(){
    console.log("hi tom")
}
//function expression
// tom()
let tom = function hi() {
    console.log("hi tom")
}
console.log(typeof tom)
tom()


/*
functions are hoisted, and can be used before they are declared. Function expressions can only be used after they are delared, they are not hoisted.

Remember JS reads the left side (declaration) first then the right side. Regular functions only have a left side, expressions have both.
*/

