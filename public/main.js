// JavaScript to handle the login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  
  const staff = "together@gmail.com";
  const staffPassword = "together";
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Check if email and password match the expected values
  if (email === staff && password === staffPassword) {
    window.location.href = 'form.html'; // Redirect to form.html
  } else {
    errorMessage.style.display = 'block'; // Show the error message
  }
});
