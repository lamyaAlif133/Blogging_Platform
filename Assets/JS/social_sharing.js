function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.classList.add('show');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 3000);
}

function makeSlug(title) {
  let words = title.trim().split(' ');
  let cleanWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = '';
    for (let j = 0; j < words[i].length; j++) {
      let char = words[i][j].toLowerCase();
      if (
        (char >= 'a' && char <= 'z') ||
        (char >= '0' && char <= '9') ||
        char === '-'
      ) {
        word += char;
      }
    }
    if (word !== '') {
      cleanWords.push(word);
    }
  }
  return cleanWords.join('-');
}

function getPostURL() {
  const editor = document.getElementById('editor');
  const lines = editor.innerText.trim().split('\n');
  const title = lines[0];

  if (!title) {
    showToast("Add a title before sharing!");
    return null;
  }

  const slug = makeSlug(title);
  return 'https://yourblog.com/post/' + slug;
}

function copyLink() {
  const postURL = getPostURL();
  if (!postURL) return;

  // Modern Clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(postURL).then(function () {
      showToast('Link copied: ' + postURL);
    }).catch(function () {
      showToast('Failed to copy the link.');
    });
  } else {
    // Fallback if Clipboard API is not available
    showToast('Clipboard not supported in this browser.');
  }
}

function share(platform) {
  const postURL = getPostURL();
  if (!postURL) return;

  const editor = document.getElementById('editor');
  const title = editor.innerText.trim().split('\n')[0];

  const encodedURL = encodeURIComponent(postURL);
  const encodedTitle = encodeURIComponent(title);

  let shareURL = '';

  if (platform.toLowerCase() === 'twitter') {
    shareURL = 'https://twitter.com/intent/tweet?url=' + encodedURL + '&text=' + encodedTitle;
  } else if (platform.toLowerCase() === 'facebook') {
    shareURL = 'https://www.facebook.com/sharer/sharer.php?u=' + encodedURL;
  }

  if (shareURL !== '') {
    window.open(shareURL, '_blank');
  }
}
