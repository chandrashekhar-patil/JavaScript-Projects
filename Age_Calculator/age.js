function calculateAge() {
  const today = new Date();
  const birthdayInput = document.getElementById("birthdate").value;
  const birthdateParts = birthdayInput.split("-");
  const birthDay = parseInt(birthdateParts[0]); // Ensure it's a number
  const birthMonth = parseInt(birthdateParts[1] - 1); // Month is 0-indexed
  const birthYear = parseInt(birthdateParts[2]); // Ensure it's a number
  const birthDate = new Date(birthYear, birthMonth, birthDay);


  console.log(birthdayInput);
  console.log(birthdateParts);
  console.log(birthDate);
  console.log(birthMonth);
  console.log(birthYear);

  // Check for valid date
  if (isNaN(birthDate.getTime())) {
    alert("Invalid Date Format. Please enter a valid date in DD-MM-YYYY format.");
    return;
  }

  // Calculate the difference in milliseconds
  const ageInMilliseconds = today - birthDate;

  // Calculate total days passed
  const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
  const ageInMinutes = Math.floor(ageInSeconds / 60);
  const ageInHours = Math.floor(ageInMinutes / 60);
  const ageInDays = Math.floor(ageInHours / 24);
  const ageInWeeks = Math.floor(ageInDays / 7);

  // Calculate years, months, and days
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // Adjust the month and day if needed
  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  // Output the results
  const resultContainer = document.getElementById("resultContainer");
  const result = document.getElementById("result");

  result.innerHTML = `
    <div class="result-item">
      <h3>Age:</h3>
      <p>${ageYears} years, ${ageMonths} months, ${ageDays} days</p>
      <h3>Months Passed:</h3>
      <p>${ageYears * 12 + ageMonths} months</p>
      <h3>Weeks Passed:</h3>
      <p>${ageInWeeks} weeks</p>
      <h3>Days Passed:</h3>
      <p>${ageInDays} days</p>
      <h3>Hours Passed:</h3>
      <p>${ageInHours} hours</p>
      <h3>Minutes Passed:</h3>
      <p>${ageInMinutes} minutes</p>
      <h3>Seconds Passed:</h3>
      <p>${ageInSeconds} seconds</p>
    </div>
  `;

  resultContainer.style.display = "block";
}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateAge();
});
