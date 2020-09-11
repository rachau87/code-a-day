// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
let numbers = [  10, 12, 3, 2, 6, 8, 9, 12, 13, 15,
                 18, 20, 14, 16, 19, 21, 1 , 4, 5, 7,
                 14, 22, 23, 24, 20, 1, 3, 8 , 11, 15, 
                 18, 22, 11, 14, 12, 6, 24, 21, 24, 26];
let number = 50;
let result = false;

// first attempt; works but not super efficient 
// execution time 1.679
/*numbers.forEach((num) => {
    numbers.forEach((num2) => {
        if ((num + num2) == number) {
            result = true;
        }
    })
})*/

// seems silly that array.foreach() doesnt have a break
// setting x = to i makes it to where you wont search the numbers that have already been used
// execution time for 4 numbers was 1.616 
for (let i = 0; i < numbers.length; i++) {
    for (let x = i; x < numbers.length; x++) {
        if ((numbers[i] + numbers[x]) == number) {
            result = true;
            break;
        }
    }
    if(result) {
        break;
    }
}

// using big O notation
// execution time indexof for 4 numbers 1.642
console.time('Execution Time2');
let seen: Array<Number> = [];
for (let i = 0; i < numbers.length; i++) {
    if(seen.indexOf((number - numbers[i]))) {
        result = true;
        break;
    }
    seen.push(numbers[i])
}
console.log(result);
console.timeEnd('Execution Time2');


