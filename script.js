// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// TODO figure out what prompts are
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// TODO Need to ask user for how long they want the password to be
// THEN I choose a length of at least 8 characters and no more than 128 characters
// TODO if it is outside of that range what do we do?
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// TODO I need 4 confirms for lowercase, uppercase, numeric, and/or special characters
// An array of nums, special, upper, lower
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// arrays
const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alphabetArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//   const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const specialCaseArr = [
  "_",
  "-",
  "(",
  ")",
  "!",
  "[",
  "]",
  "`",
  "~",
  ":",
  ";",
  "!",
];
// changing my alphabet arr to an uppercase array.
let upperCaseArr = alphabetArr.map((e) => e.toUpperCase());
console.log(numArr);
console.log(specialCaseArr);
console.log(alphabetArr);
console.log(upperCaseArr);
// making password arr for the text of the password that is required from the generators specified value inputs.
let passwordArr = [];
// this is for a large array of all my neccessary characters for the password.
let bigArr =[];
let constraint = 1;
console.log(passwordArr);
function generatePassword() {
    let fillerPassword = document.querySelector("#password");
  let value = window.prompt("How many characters would you like in your password. Choose between 8 - 128.");
  console.log(value);
  console.log(typeof(value));
  console.log(Number.isInteger(value));
//   if (value == ){
   
// }
// this is for having the correct amount of characters required for the password to generate.
  if(constraint*value > 128 || constraint*value< 8){
    window.alert("this will not work please follow the constraints"); 
    return  fillerPassword = "Try again!";
    }
    // this is for the default 4 characters needed and then i have a super 
    // array pushing any neccessary characters to the password array at random.
  var numbers = window.confirm("we will be using 0-9.");
  console.log(numbers);
  let lowerCase = window.confirm("we will be using Lowercase Letters.");
  console.log(lowerCase);
  let upperCase = window.confirm("we will be using Uppercase Letters.");
  console.log(upperCase);
  let special = window.confirm("we will be using Special Characters.");
  console.log(special);
  window.confirm("Would you like to continue?");
  if (numbers) {
    passwordArr.push(numArr[Math.floor(Math.random() * numArr.length)]);
    bigArr = bigArr.concat(numArr);
  }
  if (lowerCase) {
    passwordArr.push(alphabetArr[Math.floor(Math.random() * alphabetArr.length)]);
    bigArr = bigArr.concat(alphabetArr);
  }
  if (upperCase) {
    passwordArr.push(upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]);
    bigArr = bigArr.concat(upperCaseArr);
  }
  if (special) {
    passwordArr.push(specialCaseArr[Math.floor(Math.random() * specialCaseArr.length)]);
    bigArr = bigArr.concat(specialCaseArr);
  }
  console.log(passwordArr);
  console.log(bigArr);
  for (let i = passwordArr.length; i < value; i++) {
    // bigArr.push[Math.floor(Math.random()*(i.length - 1))];
    var random = bigArr[Math.floor(Math.random() * bigArr.length)]
    passwordArr.push(random);
    console.log(random);
  }
  return passwordArr.join("");
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
