const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const consentCheckbox = document.getElementById('gdpr-consent');
const subscriberCount = document.getElementById('subscriber-count');
const exportBtn = document.getElementById('export-btn');
const closeBtn = document.getElementById('close-btn');

let subscribers = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!email || !consentCheckbox.checked) {
    alert('Please provide a valid email and agree to the GDPR terms.');
    return;
  }

  // Simulate confirmation
  if (confirm(`Please confirm your subscription for ${email} (simulated).`)) {
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      alert('✅ Subscription successful!');
      subscriberCount.textContent = subscribers.length;
      form.reset();
    } else {
      alert('⚠️ You are already subscribed.');
    }
  }
});

// Export emails
exportBtn.addEventListener('click', () => {
  if (subscribers.length === 0) {
    alert('No subscribers to export.');
    return;
  }

  const blob = new Blob([subscribers.join('\n')], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'subscribers.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


closeBtn.addEventListener('click', () => {
  document.getElementById('newsletter-popup').style.display = 'none';
});
