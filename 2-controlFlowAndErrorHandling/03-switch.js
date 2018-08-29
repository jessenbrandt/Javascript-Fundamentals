// Switches

let friend = "paul"

switch (friend) {
    case "Kenn":
        console.log('Wanna play Catan?');
        break;
    case 'Carolyn':
        console.log('Wanna go rock climbing?');
        break;
    case 'Tyler':
        console.log('Can I ask a question>');
        break;
    default:
        console.log(`Im sorry, ${friend}, but do I know you>`)
}

let dessert = 'Pie'

switch (dessert.toLowerCase()) {
    case "pie":
        console.log('Pie, pie, me oh my!');
        break;
    case "cake":
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!');
        break;
    default:
        console.log(`Sorry, ${dessert}, is not on the menu.`)

}


