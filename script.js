// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// find out how long password should be
//
function generatePassword() {
  var length = prompt("Put The length of your new password here");
  console.log(length);
  var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var randomCharsArray = randomChars.split("");
  var result = "";
  for (var i = 0; i < length; i++) {
    result +=
      randomCharsArray[Math.floor(Math.random() * randomCharsArray.length)];
  }
  return result;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
