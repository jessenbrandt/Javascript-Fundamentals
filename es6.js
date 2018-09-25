let favoriteSuperheroes = [
    {name: "Wonder Woman", universe: "DC"},
    {name: "Loki", universe: "Marvel"},
    {name: "Aquaman", universe: "DC"},
    {name: "Black Widow", universe: "Marvel"},
    {name: "Thor", universe: "Marvel"},
    {name: "Hawkeye", universe: "Marvel"},
    {name: "Doctor Strange", universe: "Marvel"},
    {name: "The Flash", universe: "DC"},
    {name: "Scarlet Witch", universe: "Marvel"}
  ]
for(key of favoriteSuperheroes ) {
    console.log(key.name);
}

 
//  let marvelOnly = []
//  for (i=0; 1<favoriteSuperheroes.length; i++) {
// if (favoriteSuperheroes[i].universe === 'Marvel') {
//     marvelOnly = marvelOnly.concat (favoriteSuperheroes[i]);
// }
//  }


// Arrow Functions and Return

function hello(name) {
    console.log(`hello there, ${name}`)
}
hello('steve');


let hello = name => console.log(`hello there, ${name}!`) //arrow function
hello('steve');
// store as a variable - remember this prevents it from being hoisted
// when there is one parameter you don't need parantheses
// the right side of the => is what is in () normally

function fullName(first,last){
    return first + '' + last 
}
//nothing under return runs = last thing in a function
//get things outside of the scope of the function
// can access info ouside of the function
// you can only have one return 
console.log('jessica', 'brandt');

let fulName = (first, last) => first +  ' '  + last;
console.log(fulName('jessica', 'brandt'))
//one line arrow functions don't need curly braces or return


// Loops are convenient for reptitive tasks = but ES6  introduced better ways of iterating over arrays

// Map
// allows us to do the same action on every item in a array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
let biggerNumbers = numbers.map(number => number * 4)
//make a new variable to store new array in
//oldArray.map (a name => what we want to do to each item)
console.log(numbers);
console.log(biggerNumbers);

//challenge

let words = ['hello', 'bye', 'morning', 'night'] ;
let wordsUpper = words.map(cap => cap.charAt(0).toUpperCase()) ;
console.log(wordsUpper);

//Filter
// we can use this to go through an array, and only return items that match our condition

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;

let oddOnly = numbers.filter(number => number % 2 === 1) 
console.log(oddOnly);

let names = ['Tom', 'Carolyn', 'Kenn', 'Tyler', 'David', 'Paul', 'Alecx'];
let shortNames = names.filter(name => name.length <= 4);
console.log(shortNames);

//Challenge

let favoriteSuperheroes = [
    {name: "Wonder Woman", universe: "DC"},
    {name: "Loki", universe: "Marvel"},
    {name: "Aquaman", universe: "DC"},
    {name: "Black Widow", universe: "Marvel"},
    {name: "Thor", universe: "Marvel"},
    {name: "Hawkeye", universe: "Marvel"},
    {name: "Doctor Strange", universe: "Marvel"},
    {name: "The Flash", universe: "DC"},
    {name: "Scarlet Witch", universe: "Marvel"}
  ] ;

  let sort = (array,universe) => 

result = array.filter(uni  => uni.universe === universe);
console.log(sort(favoriteSuperheroes,'DC'));
  //let marvelOnly = favoriteSuperheroes.filter(name => name.universe === 'Marvel');
  //console.log(marvelOnly);


//STUDY MAP AND FILTER


let people = [
    {name: "Paul", title: "Instructor"},
    {name: "Carolyn", title: "Instructor"},
    {name: "Tyler", title: "Instructor"},
    {name: "David", title: "Instructor"},
    {name: "Kenn", title: "Instructor"},
    {name: "Tom", title: "Instructor"},
    {name: "Quentin", title: "Student"},
    {name: "Aurelia", title: "Student"},
    {name: "Hope", title: "Student"},
    {name: "Caleb", title: "Student"},
    {name: "Daniel", title: "Student"},
    {name: "Austin", title: "Student"},
    {name: "Robin", title: "Admin"},
    {name: "Alex", title: "Admin"},
    {name: "Bob", title: "Admin"},
    {name: "Chris", title: "Admin"},
    {name: "Abi", title: "Admin"}
  ]
let sort = (array,str) => 

title = array.filter(instruct  => instruct.title === str);
console.log(sort(people,'Instructor')); //use this so we don't have to repeat ourself