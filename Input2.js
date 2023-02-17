//1
const readLine= require('readline-sync');

let num1 = Number(readLine.question("Enter first number: "));
let num2 = Number(readLine.question("Enter first number: "));
let sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);
//2
let num3 = Number(readLine.question("Enter first number: "));
let num4 = Number(readLine.question("Enter first number: "));
let sum1 = num3 - num4;
console.log(`${num3} - ${num4} = ${sum1}`);
//3
let num5 = Number(readLine.question("Enter first number: "));
let num6 = Number(readLine.question("Enter first number: "));
let sum2 = num5 * num6;
console.log(`${num5} * ${num6} = ${sum2}`);
//4
let num7 = Number(readLine.question("Enter first number: "));
let num8 = Number(readLine.question("Enter first number: "));
let sum3 = num7 / num8;
console.log(`${num7} / ${num8} = ${sum3}`);
//5
let num9 = Number(readLine.question("Enter first number: "));
let num10 = Number(readLine.question("Enter first number: "));
let sum4 = num9 % num10;
console.log(`${num9} % ${num10} = ${sum4}`);
//6
let first =(readLine.question("Type first name"));
let second =(readLine.question("Type last name"));
console.log(`Grettings ${second}, ${first}`);

