// callbacks

function first(){
    setTimeout(function() {
    
    console.log("this is the first function")
}, 500)
}
function second(){
    console.log("this is the second function")
}

first()
second()

/*
callbacks are used to make things happen in a specific order
for example if I have two funtion, and the second one relies on
information for the first, I want to only invoke the second function after the first is done
*/

function secondFunction(){
    console.log('second function')
}

function firstFunction(callback){
    setTimeout(function(){
        console.log("first function") 
        callback()
    }, 500)
    }
firstFunction(secondFunction);

//Promises
// similar to callback- in that we can use them to make things happen in order asynchronously
// 3 status: pending, resolved, rejected
// insted of calling other functions as parameters, they do theings,
// and then either resolve or reject
// our next strp is using ".then"
// cleaner syntax then callback


let one = new Promise(res => setTimeout(res(), 500))

one 
.then(
    res => console.log('two')
)
.catch(
    err => console.log(err)
)


let concert = (boughtTicket) => new Promise(     //concert is acting a function and boughtTickets is the parameter
    (resolve, reject) => {
        boughtTicket ? resolve('you can go into the concert!') :
        reject('sorry you need a ticket to get in')
    }
)

concert(false)
.then( res => console.log(res))
.catch(err => console.log('error:', err))
        //function(err){
            //console.log('error:', err)
       // }                                 SAME THING AS .catch



