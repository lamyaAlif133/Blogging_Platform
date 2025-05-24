  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;
    const profession = document.getElementById("profession").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value.trim();
    const errorMsg = document.getElementById("errorMsg");
  
    const specialChars = "!@#$%^&*";
    const dobDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
  
    if (
      name === "" ||
      [...name].some((ch) => !((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z") || ch === " "))
    ) {
      errorMsg.textContent = "Name must contain only letters and spaces.";
      return;
    }
  
    if (
      email.indexOf("@") === -1 ||
      email.indexOf(".") === -1 ||
      email.indexOf("@") === 0 ||
      email.lastIndexOf(".") < email.indexOf("@") + 2 ||
      email.endsWith(".")
    ) {
      errorMsg.textContent = "Invalid email address.";
      return;
    }
  
    if (
      phone.length !== 11 ||
      !phone.startsWith("01") ||
      [...phone].some(ch => ch < '0' || ch > '9')
    ) {
      errorMsg.textContent = "Phone must be an 11-digit number starting with 01.";
      return;
    }
    
  
    if (!gender) {
      errorMsg.textContent = "Please select your gender.";
      return;
    }
  
    if (!profession) {
      errorMsg.textContent = "Please enter your profession.";
      return;
    }
  
    const hasSpecialChar = [...password].some((ch) => specialChars.includes(ch));
  
    if (password.length < 6 || !hasSpecialChar) {
      errorMsg.textContent = "Password must be at least 6 characters and include a special character.";
      return;
    }
  
    if (password !== confirmPassword) {
      errorMsg.textContent = "Passwords do not match.";
      return;
    }
  
    if (!dob || (age === 18 && monthDiff < 0) || age < 18) {
      errorMsg.textContent = "You must be at least 18 years old.";
      return;
    }
  
    if (!address) {
      errorMsg.textContent = "Please enter your address.";
      return;
    }
  
    errorMsg.style.color = "green";
    errorMsg.textContent = "Registration successful!";
    this.reset();
  });
  