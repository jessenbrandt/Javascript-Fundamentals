// Ternaries
// a short hand for a conditional statement

let x =6;

if (x > 0) {
    console.log('yes')
} else { 
    console.log('no')
}

(x > 0) ? console.log('yes') : (x < 0) ? console.log('maybe') : console.log('no');

//TLDR: for a ternary, ? == if and : = else.

let age = 19;

(age >= 25) ? console.log('Yay! You can rent a car, drink, and vote.') : (age >= 21) ? console.log('Yay! You can drink and vote') : (age >= 18) ? console.log('Yay! You can vote.') : console.log('You are too young for anything.'); 