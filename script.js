console.log(this);
// Assignment Code
var generateBtn = document.getElementById("generate");

//array of special characters to be included in password
var specialCharacters = ['@', '#', '&', '%', '$', '!', '*', '_', ':', '_', ':'];

//array of numberic characters to be included in password 
var numbericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//array of lowerecase characters to be included in password 
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//array of uppercase characters to be included in password 
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

() => {
  let passLength = prompt('how many characters?');
  console.log(passLength);
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate buttont
generateBtn.addEventListener("click", writePassword);
