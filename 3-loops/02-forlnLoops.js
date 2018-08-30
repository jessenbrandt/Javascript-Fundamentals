// for-in loops
// great for iterating over valuses in a object
// for-in loopps work when the properties are 'enumerable'


// let student = {name: 'Peter', awesome: true, degree: 'JavaScript', week: 1}

for (let item in student) {
    console.log(item); // prints the keys
    console.log(student[item]); // prints the values of the keys
}


let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']
for (let cat in catArray) {
    console.log(cat); // index
    console.log(catArray[cat]);
}

let name = 'paUl'
let capName;
for (let n in name) {
    if (n == 0) {
        capName = name[n].toUpperCase();
    } else {
        capName += name[n].toLowerCase();
    }
}
console.log(capName);

