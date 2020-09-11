// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

let numArray = [1, 2, 3, 4, 5];
let outputArray: Array<Number> = []; 
let product = 1;

// first attempt it works
// shouldn't calculate the sum everytime
numArray.forEach((num) => {
    numArray.forEach((num2) => {
        product *= num2;
    })
    product = product / num;
    outputArray.push(product);
    product = 1;
})

// second attempt
// since we are dividing the result everytime it makes more sense to calculate the sum once instead of each time
numArray.forEach((num) => {
    product *= num;
})

numArray.forEach((num2) => {
    outputArray.push((product / num2));
})

// third attempt
// trying to skip your number so no divison is necessary
for (let i = 0; i < numArray.length; i++) {
    for (let x = 0; x < numArray.length; x++) {
        if ((numArray[i] != numArray[x])) {
            product *= numArray[x];
        }
    }
    outputArray.push(product);
    product = 1;
}

console.log(outputArray);