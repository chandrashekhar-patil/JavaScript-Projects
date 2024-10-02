window.onload = function () {
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
    console.log('Password generation started');
    let passwordLength = inputSlider.value;
    console.log('Password length:', passwordLength); // Debug

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
    console.log('Generated Password:', password); // Debug
  }

  // Event listener for slider input to display updated value
  inputSlider.addEventListener('input', function () {
    sliderValue.textContent = inputSlider.value;
    console.log('Slider value changed:', inputSlider.value); // Debug
  });

  // Event listener for "Generate Password" button click
  getBtn.addEventListener('click', function() {
    console.log('Generate button clicked!'); // Debug
    generatePassword();
  });

  // Function to copy password to clipboard using the Clipboard API
  document.querySelector('.material-symbols-outlined').addEventListener('click', function () {
    if (passBox.value === '') {
      alert('Please generate a password first!');
      return;
    }

    navigator.clipboard.writeText(passBox.value)
      .then(() => {
        alert('Password copied to clipboard');
      })
      .catch(() => {
        alert('Failed to copy the password!');
      });
  });

  // Ensure at least one checkbox is selected when the page loads
  if (!lowercaseCheckbox.checked && !uppercaseCheckbox.checked && !numbersCheckbox.checked && !symbolsCheckbox.checked) {
    lowercaseCheckbox.checked = true; // Default to lowercase
  }

  // Generate a password on page load
  generatePassword();
};
