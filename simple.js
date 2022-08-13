// Sum (1-5) Straight Way
/* let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum); */

// Sum (5-1) Reverse Way
/* let sum = 0;
for (let i = 5; i >= 1; i--) {
    sum = sum + i;
}
console.log(sum); */

//We can call same fuction From inside the function (Recursion)
function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}
const result = sum(5);
console.log(result);
/*
5+ sum(4)
5+4+sum(3)
5+4+3+sum(2)
5+4+3+2+sum(1)
5+4+3+2+1
*/
