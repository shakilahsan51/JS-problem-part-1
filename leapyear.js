// Year is a leapyear if this year is divisible by 4. [Simple Logic]
// Example-1
function isLeapyear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const leap = isLeapyear(2075);
console.log(leap);


// Example-2

function isLeapyear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    return false;
}

const leap2 = isLeapyear2(2052);
console.log(leap2);