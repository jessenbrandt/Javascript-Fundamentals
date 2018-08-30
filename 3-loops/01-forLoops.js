/*
Loops offer a quick and easy way to do something repeatedly. 
There are many different kindds of loops but they all do roughly the same thing:
for statement
do while statement
labeled statement
break statement
continue statement
for instatemnet
for of statement
*/

for (let i =0; i < 10; i++ ){
    console.log(i);
}

for (let i =0; i<= 20; i +=2){
    console.log(i);
}

for (let i =10; i>= 0; i -=1){
    console.log(i);
}

for (let i =0; i>= -24; i -=2){
    console.log(i);
}

let str = 'jessica'
for (let i = 0; i < str.length; i++){
    console.log(str.charAt(i));
}

let sum = 0;
for (let i = 0; i <=50; i++) {
    sum+=i; // sum = sum + i
}
console.log(sum); // this needs to be on the outside

