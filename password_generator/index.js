// Selecting DOM elements
const passBox = document.getElementById('passBox');
const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');
const getBtn = document.getElementById('getBtn');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

// Character sets
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '@#$%^&*()_+~|}{[]:;?><,./-=';

// Function to generate the password
function generatePassword() {
  let passwordLength = inputSlider.value;
  let characterSet = '';

  // Include checked character sets
  if (lowercaseCheckbox.checked) characterSet += lowercase;
  if (uppercaseCheckbox.checked) characterSet += uppercase;
  if (numbersCheckbox.checked) characterSet += numbers;
  if (symbolsCheckbox.checked) characterSet += symbols;

  // Check if any checkbox is selected
  if (characterSet === '') {
    alert('Please select at least one character set!');
    return;
  }

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  passBox.value = password;
}

// Event listener for slider input to display updated value
inputSlider.addEventListener('input', function () {
  sliderValue.textContent = inputSlider.value;
});

// Event listener for "Generate Password" button click
getBtn.addEventListener('click', generatePassword);

// Function to copy password to clipboard
document.querySelector('.material-symbols-outlined').addEventListener('click', function () {
  if (passBox.value === '') {
    alert('Please generate a password first!');
    return;
  }
  passBox.select();
  document.execCommand('copy');
  alert('Password copied to clipboard');
});

// Initial password generation when the page loads
window.onload = generatePassword;
