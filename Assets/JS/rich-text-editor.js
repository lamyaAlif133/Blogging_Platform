

function format(command, value = null) {
  document.execCommand(command, false, value);
  saveContent(); // Save after formatting
}

function insertLink() {
  let url = prompt("Enter URL:");
  if (url) {
    document.execCommand("createLink", false, url);
    saveContent();
  }
}

function insertImage() {
  let url = prompt("Enter image URL:");
  if (url) {
    document.execCommand("insertImage", false, url);
    saveContent();
  }
}

function togglePreview() {
  let editor = document.getElementById("editor");
  let preview = document.getElementById("preview");

  if (preview.classList.contains("hidden")) {
    preview.innerHTML = editor.innerHTML;
    editor.classList.add("hidden");
    preview.classList.remove("hidden");
  } else {
    preview.classList.add("hidden");
    editor.classList.remove("hidden");
  }
}


document.getElementById("editor").addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.getElementById("editor").addEventListener("drop", (e) => {
  e.preventDefault();
  let files = e.dataTransfer.files;

  if (files.length > 0 && files[0].type.startsWith("image/")) {
    let reader = new FileReader();
    reader.onload = function (event) {
      let img = document.createElement("img");
      img.src = event.target.result;
      img.className = "resizable";
      document.getElementById("editor").appendChild(img);
      saveContent();
    };
    reader.readAsDataURL(files[0]);
  }
});


const editor = document.getElementById("editor");
const LOCAL_STORAGE_KEY = "richTextEditorContent";

window.addEventListener("DOMContentLoaded", () => {
  const savedContent = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedContent) {
    editor.innerHTML = savedContent;
  }
});


editor.addEventListener("input", () => {
  saveContent();
});

document.getElementById("logoutBtn").addEventListener("click", function() {
  // Replace this with your actual logout logic
  alert("You have been logged out!");
  // Example: Redirect to login page
  window.location.href = "../VIEW/login.html";
});
