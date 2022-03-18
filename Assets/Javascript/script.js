// Assignment Code
var generateBtn = document.querySelector("#generate");
//prompt that gathers data relating to your desired password//
function generatePassword() {
  var numberOfCharacters = prompt("How many characters do you want your password to contain?");
if (numberOfCharacters >=8 && numberOfCharacters <128){
  var specialCharacters = confirm("Would you like to add special characters?")
}
else{
alert("Password does not meet criteria")
return("Retry password set")
}

if(specialCharacters){
  var numbers = confirm("Would you like to add numbers?");
  
}
else{
  alert("Password is not strong enough")
  return("Retry password set")
  }



if (numbers){
  confirm("would you like to add uppercase and lowercase letters?")

return passwordGenerater(numberOfCharacters)


}else{
  alert("Password is not strong enough")
  return("Retry password set")
  }


  
}

function passwordGenerater(numberOfCharacters){


var length = numberOfCharacters;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()";
// for loop that grabs password entities//
retVal = "";
for (var i = 0, n = lowerCase.length; i < length; ++i) {
retVal += lowerCase.charAt(Math.floor(Math.random() * n));

var p = specialCharacters.length;
retVal += specialCharacters.charAt(Math.floor(Math.random() * p));
++i;

 var j = upperCase.length; i < length; ++i
  retVal += upperCase.charAt(Math.floor(Math.random() * j));
++i
var l = numbers.length; i < length; ++i
    retVal += numbers.charAt(Math.floor(Math.random() * l));
    ++i
  }


return retVal;





}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
