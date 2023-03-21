const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numSet = "1234567890";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const symbolSet = "!@#$%^&*()";

const display = document.getElementById("display");
const upperCase = document.getElementById("UpperCase");
const lowerCase = document.getElementById("LowerCase");
const contNumber = document.getElementById("checkNumber");
const symbol = document.getElementById("symbols");
const button = document.getElementById("buttons");
const passLength = document.getElementById("number");

function getRandomData(dataSet) {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
}

function getPassword(password = "") {
  if (upperCase.checked) {
    password += getRandomData(upperSet);
  }
  if (symbol.checked) {
    password += getRandomData(symbolSet);
  }
  if (lowerCase.checked) {
    password += getRandomData(lowerset);
  }
  if (contNumber.checked) {
    password += getRandomData(numSet);
  }
  if (password.length < passLength.value) {
    return getPassword(password);
  }
  console.log(password);
}

// print a data

display.innerText = 

// call the function
getPassword();

button.addEventListener("click", function () {
  getPassword();
});


