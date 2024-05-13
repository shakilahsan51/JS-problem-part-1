// 21-4 Calculate The Average Of The Odd Numbers In An Array

// Function Takes an array as parameter and give the average of the all odd numbers. 

function oddAverage(numbers) {
    const odd = [];

    for (const number of numbers) {

        if (number % 2 === 1) {
            // console.log(number);

            odd.push(number)
        }
    }
    // console.log(odd);

    let sum = 0
    for (const number of odd) {
        sum = sum + number;
    }
    console.log(sum);

    const count = odd.length;

    const avg = sum / count;

    return avg;

}

const numbers = [10, 23, 20, 67, 17, 7];
const avg = oddAverage(numbers);
console.log('Average is ', avg);