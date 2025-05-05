function saveProfile() {
  let photoInput = document.getElementById("photoInput");
  let nameInput = document.getElementById("nameInput").value();
  let aboutInput = document.getElementById("aboutInput").value();
  let socialInput = document.getElementById("socialInput").value();
  let verifiedInput = document.getElementById("verifiedInput").checked;
  let profileDisplay = document.getElementById("profileDisplay");

  let photoURL = "";
  if (photoInput.files[0]) {
    photoURL = URL.createObjectURL(photoInput.files[0]);
  }

  profileDisplay.innerHTML = `
        ${photoURL ? `<img src="${photoURL}" alt="Author Photo">` : ""}
        <h2>${nameInput || "Unnamed Author"} ${
    verifiedInput ? '<span class="verified-badge">✔️</span>' : ""}</h2>
        <p>${aboutInput || "No description provided."}</p>
        ${
          socialInput
            ? `<a href="${socialInput}" target="_blank">Follow Me</a>`
            : ""
        }
        <div><button onclick="viewPosts()">View All Posts</button></div>
    `;
}

function viewPosts() {
  alert("Showing all posts by this author...");
}
