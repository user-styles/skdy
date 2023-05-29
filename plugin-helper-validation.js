var aYear = new Date().getFullYear();
document.getElementById('aYear').innerHTML = aYear;

// Get all the survey buttons
const surveyButtons = document.querySelectorAll('#survey button[name]');
// Add a click event listener to each button
surveyButtons.forEach(button => {
  button.addEventListener('click', event => {
   // Remove the selected class from all buttons
   surveyButtons.forEach(button => button.classList.remove('selected'));
    // Add the selected class to the clicked button
    event.target.classList.add('selected');
  });
});

// Function to handle submitting the survey
function submitSurvey() {
  // Get the selected button
  const selectedButton = document.querySelector('#survey button.selected');
  // If a button has been selected
  if (selectedButton) {
    // Show the confirmation message
    alert(`You have selected '${selectedButton.textContent}'. Thank you for taking the survey!`);
    // Close the dialog box
    selectedButton.closest('dialog').close();
  } else {
    // If no button has been selected, show an error message
    alert('Please select an option before submitting the survey.');
  }
}

const form = document.querySelector('#newsletter-form');
const acknowledgement = document.querySelector('#acknowledgement');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    acknowledgement.style.display = 'block';
    form.reset();
  }
});

// More code...

// jQuery code
$(document).ready(function() {
  $('#partner-content').hide(); // hide the content initially
  $('#click-here').click(function() { // bind a click event to the 'Click Here' text
    $('#partner-content').toggle(); // toggle the visibility of the content
  });
});
