// If else Statements

let weather = 60;

if (weather < 80 && weather > 40) {
    console.log('go outside')
} else { 
    console.log('stay inside')
}

// let name = '                Jessica';

// if (name.trim() == 'Jessica') {
//     console.log('Hello, my name is Jessica!')
// } else {
//     console.log('Hello, what is your name?')
// }

let name = 'jESsIca';

function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words(name));

if (name[0] == name[0].toUpperCase) {
    let firtsLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firtsLetter)

} else {
    let otherLetter = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetter)
}


// Else If Statements

let coffee = 'hot';

if (coffee == 'hot') { 
    console.log('do something')
} else if (coffee = "lukewarm") {
    console.log('do something else')
} else {
    console.log('do something else again')
}

let age = 29

if (age >= 25) {
    console.log('Yay! You can rent a car, drink, and vote!')
} else if (age >= 21) {
    console.log('Yay! You can drink and vote!')
}  else if  (age >= 18) {
    console.log('Yay! You can vote!')
} else { (age <= 17)
    console.log('You are too young to do anything.')
}