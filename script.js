// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function randomCharacter(max) {
  return Math.floor(Math.random() * max);

}

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

function generatePassword() {
   // Prompt
   var passwordLength = prompt("Pick a number between 8-128");

   if (passwordLength < 8 || passwordLength > 128) {
     alert("Unable to execute. Pick a number between 8-128")
     passwordLength = prompt("Pick a number between 8-128");
   }
 

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

   // Confirms
   // Lowercase Letters
   var isLowerLetters = confirm("Would you like to use lowercase letters?");
   console.log(isLowerLetters);
   // Uppercase Letters
   var isUpperLetters = confirm("Would you like to use uppercase letters?");
   console.log(isUpperLetters);
   // Numbers
   var isNumberChar = confirm("Would you like to use numbers?");
   console.log(isNumberChar);
   // Special Characters
   var isSpecialChar = confirm("Would you like to use special characters?");
   console.log(isSpecialChar);
 
   // Optional characters
   var lowerLetters = "abcdefghijklmnopqrstuvwxyz".split("");
   console.log(lowerLetters);
   var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   console.log(upperLetters);
   var numberChar = "0123456789".split("");
   console.log(numberChar);
   var specialChar = "/?.>,<':;\|]}[{=+-_)(*&^%$#@!`~".split("");
   console.log(specialChar);

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

   var newPassword = "";

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

   while (newPassword.length <= passwordLength) {
     if (isLowerLetters) {
        i = randomCharacter(lowerLetters.length); newPassword = newPassword+lowerLetters[i];
     }
     if (isUpperLetters) {
       i = randomCharacter (upperLetters.length); newPassword = newPassword+upperLetters[i];
     }
     if (isNumberChar) {
       i = randomCharacter (numberChar.length); newPassword = newPassword+numberChar[i];
     }
     if (isSpecialChar) {
       i = randomCharacter (specialChar.length); newPassword = newPassword+specialChar[i];
     }
   }

  console.log(newPassword);

   return newPassword;

}


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);