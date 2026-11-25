const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email.trim() === "" || password.trim() === "") {
        message.textContent = "Please enter all details.";
        return;
    }

    message.textContent = "Login form submitted successfully!";

    console.log("Email:", email);
});