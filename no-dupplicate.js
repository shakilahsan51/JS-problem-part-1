// Array has some duplicate element and we have to remove it from this array. 

function noDuplicateArray(array) {
    // console.log(array);
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }

    return unique;
}


const birianiKhor = ['abul', 'babul', 'kabul', 'abul', 'babul', 'dabul'];
const uniqueArray = noDuplicateArray(birianiKhor);
console.log(uniqueArray);