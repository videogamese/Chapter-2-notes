//1
const readLine= require('readline-sync')
let answer = readLine.question("Would you like to hear a joke? ");
if (answer == "yes"){
    console.log('Thanks for explaining the word many for me, It means a lot');
} else {
    console.log("Ok :(");
}

let number =  readLine.question("Enter a number");
if (number % 2 == "0"){
    console.log('The number is divisible by 2');
}
else if (number > "0") {
    console.log("The number is not divisible by 2");
}
 
if (number % 3 == "0"){
    console.log('The number is divisible by 3');
}
else if (number > "0") {
    console.log("The number is not divisible by 3");
}
if (number % 4 == "0"){
    console.log('The number is divisible by 4');
}
else if (number > "0") {
    console.log("The number is not divisible by 4");
}
if (number % 5 == "0"){
    console.log('The number is divisible by 5');
}
else if (number > "0") {
    console.log("The number is not divisible by 5");
}
if (number % 6 == "0"){
    console.log('The number is divisible by 6');
}
else if (number > "0") {
    console.log("The number is not divisible by 6");
}

let secret =  Number(readLine.question("Lets play a game :). Try to guess the secret number"));
if (secret == 57){
    console.log("You found my secret number! Congrats!");
}
if (secret > 57){
    console.log("Number is too high. Try again.");
}
if (secret < 57){
    console.log("Number is too low. Try again");
}

let price = readLine.question("Enter current price");
