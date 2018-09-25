// Arrays

// let arr = [];

// console.log(typeof arr)

// let students = [23, true, false, 'Evan', 'Parker', ['Amira', 'Mohamed']];

// console.log(typeof students)
// console.log(students instanceof Array) // boolean answer (true or false) to let you know if it is an array
// console.log(typeof Object)

// let names = students [5][0];

// console.log(`Hello ${names}, you look nice today.`);


// if (students instanceof Array === true && typeof students === 'object'); {
//     let names = students [5][0];
//     console.log(`Hello ${names}, you look nice today.`);
// }


let food = ['pizza', 'tacos', 'bbq', 'ramen', 'filet', 'brussel sprouts'];

//Methods - are mini functions

food.push('cheese cake'); //Puts the data into the array on the end

food.splice(3, 1, 'Spaghetti', 'Chicken'); //.splice (position, how many to del, what to put in)

food.splice(5, 0, 'Beer');

food.pop(); //takes the last item off the end of the array


// for (let f in food) {
//     // console.log(f); //List the number of the order
//     console.log(food[f]);
// }
// people don't really use for in loops anymore

food.forEach(f => console.log (f));

food.forEach((value, number) => {console.log(number); console.log(value)});

//PRACTICE

let movies = ['Mulan', 'Snow White', 'Hercules', 'Tarzan', 'Bambi'];

movies.push('The Lion King');

movies.splice(1, 1, 'Lady and the Tramp');

movies.forEach((value, number) => {console.log (number); console.log(value)});

// .length - to count what is in your array

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log(newArr.length)

let colors = ['blue', 'green', 'yellow', 'red', 'grey', 'black'];
console.log(colors.length);
console.log(colors.toString()); // puts your array in a string


//PRACTICE

let holidays = ['Halloween', 'Thanksgiving', 'Christmas', 'New Years', `Valentine's Day`];
//console.log(holidays instanceof Array);
holidays.reverse()
holidays.forEach((value, number) => {console.log(number); console.log(value)});

let arr = new Array(1,2,3,4,5)

//console.log(arr)

// if (arr instaneof Array === true) {
//     let revArr = arr.reverse()
//     revArr.forEach(value => console.log(value))
// }


let originalArray = [1,2,3,4,5,6,7,8,9,10];

function even(a) {
  let ar = [];

  for (let i = 0; i < a.length; i++) {
    ar.push(a[2 * i + 1]);
  }
}

console.log(even(originalArray));