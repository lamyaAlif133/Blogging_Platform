function saveProfile() {
  let photoInput = document.getElementById("photoInput");
  let nameInput = document.getElementById("nameInput").value.trim();
  let aboutInput = document.getElementById("aboutInput").value.trim();
  let socialInput = document.getElementById("socialInput").value.trim();
  let verifiedInput = document.getElementById("verifiedInput").checked;
  let profileDisplay = document.getElementById("profileDisplay");
 

  if (nameInput === "") {
    alert("Please enter your name.");
    return;
  }
 
  if (aboutInput === "") {
    alert("Please write something about yourself.");
    return;
  }
 
  if (socialInput === "") {
    alert("Please enter your social link.");
    return;
  }
 
  if (!(socialInput.startsWith("http://") || socialInput.startsWith("https://"))) {
    alert("Social link should start with http:// or https://");
    return;
  }
 
  let photoURL = "";
  if (photoInput.files && photoInput.files[0]) {
    photoURL = URL.createObjectURL(photoInput.files[0]);
  }
 
  profileDisplay.innerHTML = `
    ${photoURL ? `<img src="${photoURL}" alt="Author Photo" width="100">` : ""}
    <h2>${nameInput} ${verifiedInput ? '<span class="verified-badge">✔️</span>' : ""}</h2>
    <p>${aboutInput}</p>
    <a href="${socialInput}" target="_blank">Follow Me</a>
    <div><button onclick="viewPosts()">View All Posts</button></div>
  `;
}
 
function viewPosts() {
  alert("Showing all posts by this author...");
}
 