// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
let numbers = [10, 15, 3, 7];
let number = 17;
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
// execution time 1.616 and 1.658 if using x = 0 instead of x = i
console.time('Execution Time');
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
console.log(result);
console.timeEnd('Execution Time');

