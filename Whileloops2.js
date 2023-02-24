const readLine= require('readline-sync');

let answer = readLine.question("Would you like to quit? Enter y or n: ");
while (answer !== "y" && answer !== "n"){
    console.log("invalid choice");
    answer = readLine.question("Try again. Enter y or n: ");
}
console.log('You typed ${answer}');