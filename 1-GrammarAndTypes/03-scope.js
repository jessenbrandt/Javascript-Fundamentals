// // What is scope?
// // JS has local and global scopes
// var x = 12
// //global x - global scope
// function scope(){
//     //scope is local to my function
//     x = 33
//     console.log(x)
// }

// console.log(x)
// scope()
// console.log(x)


function varTest(){
    var scope = 1
    if (true) {
        var scope = 2
        console.log(scope)
    }
    console.log(scope)
}
varTest()

function letTest(){
    let scope = 1
    if (true) {
        let scope = 2
        console.log(scope)
    }
    console.log(scope)
}
letTest()

function constTest(){
    const scope = 1
    if (true) {
        const scope = 2
        console.log(scope)
    }
    console.log(scope)
}
constTest()

// TLDR:Let & const - block scope; var is not.


