const emailForm = document.getElementById("email-form");
const resetForm = document.getElementById("reset-form");
const message = document.getElementById("message");
const formTitle = document.getElementById("form-title");

// Step 1: Send Reset Link
emailForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  // Simulate sending email and moving to reset form
  message.textContent = `A reset link has been sent to ${email}. Click to simulate reset.`;
  message.style.cursor = "pointer";
  message.style.color = "blue";

  message.onclick = () => {
    emailForm.classList.add("hidden");
    resetForm.classList.remove("hidden");
    formTitle.textContent = "Set New Password";
    message.textContent = "";
  };
});

// Step 2: Reset Password
resetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newPass = document.getElementById("new-password").value;
  const confirmPass = document.getElementById("confirm-password").value;

  if (newPass !== confirmPass) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
  } else {
    message.textContent = "Password has been successfully reset!";
    message.style.color = "green";
    resetForm.reset();
  }
});
