let commentsContainer = document.getElementById("commentsContainer");

function addComment(parent = null) {
  let input = document.getElementById("commentInput");
  let text = input.value.trim();
  if (text === "") return;

  let div = document.createElement("div");
  div.className = "comment";

  let content = document.createElement("div");
  content.textContent = text;

  let actions = document.createElement("div");
  actions.className = "actions";

  actions.innerHTML = `
    <span onclick="replyComment(this)">Reply</span> |
    <span onclick="featureComment(this)">Pin</span> |
    <span onclick="deleteComment(this)">Delete</span>
  `;

  div.appendChild(content);
  div.appendChild(actions);

  if (parent) {
    parent.appendChild(div);
  } else {
    commentsContainer.appendChild(div);
  }

  input.value = "";
}

function replyComment(span) {
  let parentComment = span.parentElement.parentElement;
  let replyBox = document.createElement("div");
  replyBox.className = "reply-box";

  replyBox.innerHTML = `
    <textarea placeholder="Write reply..."></textarea>
    <button onclick="submitReply(this)">Reply</button>
  `;

  parentComment.appendChild(replyBox);
}

function submitReply(button) {
  let replyBox = button.parentElement;
  let textarea = replyBox.querySelector("textarea");
  let replyText = textarea.value.trim();
  if (replyText === "") return;

  let div = document.createElement("div");
  div.className = "comment";
  div.innerHTML = `<div>${replyText}</div>`;

  replyBox.parentElement.appendChild(div);
  replyBox.remove();
}

function featureComment(span) {
  let comment = span.parentElement.parentElement;
  comment.classList.toggle("featured");
}

function deleteComment(span) {
  let comment = span.parentElement.parentElement;
  comment.remove();
}
