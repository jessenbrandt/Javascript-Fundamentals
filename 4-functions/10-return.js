// Return
// allows you to use it on websites, console log is just a view on the terminal

function capitalizeName(name) {
    let capName = '';
    for (let r in name) {
        if (r == 0) {
            capName += name[r].toUpperCase();
        } else {
            capName += name[r].toLowerCase();
        }
    }
   // console.log(capName)
    return capName
}

const myName = capitalizeName('paRKEr');
console.log(myName + ' how are you doing?');


function tipCalulator(bill) {
    let tipAmount = bill *= .20;
    let total = bill + tipAmount;
    return total.toFixed(2) //fixed to two .00 places
}
const tip = tipCalulator(20)
console.log(tip)
