
// Example-1
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const myHeight = inchToFeet(75)

console.log(myHeight);


// Example-2
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);

    const inchRemaining = inch % 12;

    result = feetFraction + ' fit ' + inchRemaining + ' inch.';

    return result;
}

const myHeight2 = inchToFeet2(75)
console.log(myHeight2);


// Example-3
function mileToKilometer(mile) {
    kilo = mile * 1.60934;
    return kilo;
}

const kilometer = mileToKilometer(7);
console.log(kilometer + ' kilometer.');