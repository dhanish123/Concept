
//Combine array items into one value.

const numbers = [1, 2, 3, 4,];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10


//Start: acc = 0

// Step 1: acc = 0 + 1 = 1 is stored in acc
// Step 2: acc = 1 + 2 = 3
// Step 3: acc = 3 + 3 = 6
// Step 4: acc = 6 + 4 = 10 (final result)