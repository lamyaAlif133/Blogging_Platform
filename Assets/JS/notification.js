let notificationCount = 2;

const bell = document.getElementById('bell');
const notificationList = document.getElementById('notificationList');

bell.addEventListener('click', () => {
  notificationList.style.display = notificationList.style.display === 'block' ? 'none' : 'block';
});

function markAsRead(button) {
  const notificationItem = button.parentElement;
  notificationItem.style.opacity = "0.5";
  button.remove();
  notificationCount--;

  updateNotificationCount();
}

function updateNotificationCount() {
  const countSpan = document.getElementById('notificationCount');

  if (notificationCount <= 0) {
    countSpan.style.display = 'none';
  } else {
    countSpan.textContent = notificationCount;
  }
}

function saveSettings() {
  const emailEnabled = document.getElementById('emailNotif').checked;
  const pushEnabled = document.getElementById('pushNotif').checked;

  showToast(`Settings Saved! Email: ${emailEnabled}, Push: ${pushEnabled}`);
}


function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
