const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

function validatePassword() {
    if (password.value === confirmPassword.value) {
        alert("Passwords match! Registration successful.");
        return true;
    } else {
        alert("Passwords do not match. Please try again.");
        return false;
    }
}

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value === password.value) {
        message.textContent = "Passwords match!";
        message.className = "success";
    } else {
        message.textContent = "Passwords do not match";
        message.className = "error";
    }
});
