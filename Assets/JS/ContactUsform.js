let num1 = Math.floor(Math.random() * 10 + 1);
    let num2 = Math.floor(Math.random() * 10 + 1);
    document.getElementById("question").textContent = `What is ${num1} + ${num2}?`;

    function handleSubmit(event) {
      event.preventDefault();

      const answer = parseInt(document.getElementById("captcha").value);
      if (answer !== num1 + num2) {
        alert("CAPTCHA failed! Try again.");
        return false;
      }

      
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      console.log(`Auto-receipt email sent to ${email} with user's name: ${name}`);

      
      document.getElementById("contactForm").style.display = "none";
      document.getElementById("confirmation").style.display = "block";
      return false;
    }