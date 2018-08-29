// They need 'iterable' properties

let student = {name: 'Peter', awesome: true, degree: 'JavaScript', week: 1}

for (key of student){
    console.log(key);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']

for (cat of catArray){
    console.log(cat);
}

