// Arrow Functions

function coffee() {
    console.log('coffee is tasty')
}
coffee()

let coffee = () => {
    console.log('coffee is really tasty')
}

coffee()

let cats = (kitten, puppy) => 
{ console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)!`)
}

cats(1, 14)

let apples = (x) => {
    console.log(x, `apples for dinner`) //body block
}

let apples = x => console.log(x, `apples for dinner`) /*concise body => only works with I have 1 parameter and/or
1 action
*/
apples(10);

let banana = b => {
    let icecream = b ** 2;
    console.log(icecream)
}

banana(3);

let clock = (t, r, e, s) => {};

// line breaks are bad

let func = () => console.log('good'); //okay

let function = ()
    => console.log('bad') //NOT OKAYYY

// let function = ()