// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// find out how long password should be
//
function generatePassword() {
  var length = prompt("Put The length of your new password here");
  var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = confirm("Do you want lowercase letters in your password");

  if (lowercase === true) {
    randomChars += "abcdefghijklmnopqrstuvwxyz";
    var Numbers = confirm("do you want Numbers");
  }
  if (Numbers === true) {
    randomChars += "1234567890";
    var Special = confirm("do you want Special characters");
  }
  if (Special === true) {
    randomChars += "!@#$%^&*()";
    var randomCharsArray = randomChars.split("");
    var result = "";
  }
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
