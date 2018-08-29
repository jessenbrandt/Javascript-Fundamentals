// Calling Functions

function hi() {
    console.log('Hello there')
}

hi() // This calls the function!!

// console.log(hi()) // Will be undefined

function numbers() {
   for (let i =1; i < 10; i++ )
        console.log(i);
}
numbers()

let arr = ['This', 'is', 'really', 'cool'];

function practice() {
    for (word of arr)
    console.log(word);
}
practice()