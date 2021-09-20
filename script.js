const AGE = 115;
const FIRSTNAME = 'Bram'
const TOTALAMOUNT = 200

console.log('Welkom,', FIRSTNAME)

if (18 > AGE) {
    console.log('Je bent helaas te jong om naar binnen te gaan.')
} else {
    console.log('Je mag naar binnen!')
    if (18 <= AGE && AGE <= 25) {
        console.log('Sterker nog: je krijgt vanavond 50% korting!')
    } else {
        console.log('Je krijgt helaas geen korting.')
    }

    if (FIRSTNAME == 'Bram' || FIRSTNAME == 'Sarah') {
        console.log('Je krijgt een gratis biertje!')
    } else {
        console.log('Je krijgt helaas geen gratis biertje.')
    }

    if (TOTALAMOUNT >= 100) {
        console.log('Gefeliciteerd! Je krijgt een gratis flesje champagne!')
    } else if (TOTALAMOUNT >= 50) {
        console.log('Gefeliciteerd! Je krijgt een gratis portie nachos!')
    } else if (TOTALAMOUNT >= 25) {
        console.log('Gefeliciteerd! Je krijgt een gratis portie bitterballen!')
    } else {
        console.log('Bestel meer drankjes om in aanmerking te komen voor onze cadeaus!')
    }
}