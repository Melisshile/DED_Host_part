// DOM Elements
const signUpBtn = document.getElementById("signUpBtn");
const loginBtn = document.getElementById("loginBtn");
const loginForm = document.getElementById("loginForm");
const signUpForm = document.getElementById("signUpForm");

// Simulating a database of ambassadors using an object
const ambassadors = {};

// Show Sign Up Form, Hide Login Form
signUpBtn.addEventListener("click", function() {
    loginForm.classList.add("hidden");
    signUpForm.classList.remove("hidden");
});

// Show Login Form, Hide Sign Up Form
loginBtn.addEventListener("click", function() {
    signUpForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

// Handle Sign Up
document.getElementById("signup").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Gather user input from sign-up form
    const email = document.getElementById("email").value;
    const username = document.getElementById("preferredUsername").value;
    const password = document.getElementById("signUpPassword").value;
    const studentNumber = document.getElementById("studentNumber").value;
    const firstName = document.getElementById("firstName").value;
    const surname = document.getElementById("surname").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const faculty = document.getElementById("faculty").value;
    const residence = document.getElementById("residence").value;
    const studyLevel = document.getElementById("studyLevel").value;

    // Store the email, username, and password in the ambassadors object
    if (email && username && password) {
        ambassadors[username] = { email, password };
        
        // Send data to Formspree
        const formData = {
            studentNumber: studentNumber,
            firstName: firstName,
            surname: surname,
            email: email,
            username: username,
            gender: gender,
            age: age,
            faculty: faculty,
            residence: residence,
            studyLevel: studyLevel
        };

        // Post to Formspree using fetch
        fetch('https://formspree.io/f/mwpejyeo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Sign up successful and data submitted! You can now log in.");
                signUpForm.classList.add("hidden");
                loginForm.classList.remove("hidden");
            } else {
                alert("Failed to submit form. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form.");
        });
    } else {
        alert("Please fill in all fields.");
    }
});

// Handle Login
document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get username and password from login form
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Check if the username exists and password is correct
    if (ambassadors[username] && ambassadors[username].password === password) {
        // Redirect to ambassador.html if login is successful
        window.location.href = "ambassadorForm.html";
    } else {
        alert("Incorrect username or password. Please try again.");
    }
});
