/* const numbers = [45, 65, 23, 98, 19];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
} */

// New Technique in JavaScript For Getting Array Element easily
// For Of Loop
const numbers = [45, 65, 23, 98, 19];
for (const number of numbers) {
    console.log(number);
}