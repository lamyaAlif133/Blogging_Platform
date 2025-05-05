

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

// Drag and drop image upload
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

// ✅ Auto-save feature
const editor = document.getElementById("editor");
const LOCAL_STORAGE_KEY = "richTextEditorContent";

// Load saved content on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedContent = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedContent) {
    editor.innerHTML = savedContent;
  }
});

// Save content on input (typing)
editor.addEventListener("input", () => {
  saveContent();
});

// Save to localStorage
function saveContent() {
  localStorage.setItem(LOCAL_STORAGE_KEY, editor.innerHTML);
}

document.getElementById("notificationBtn").addEventListener("click", () => {
  alert("You have no new notifications.");
});

