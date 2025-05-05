function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
  
  function copyLink() {
    const editor = document.getElementById('editor');
    let title = editor.innerText.trim().split('\n')[0];
    if (!title) {
      showToast("Add a title before sharing!");
      return;
    }
  
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    const postURL = `https://yourblog.com/post/${slug}`;
  
    const tempInput = document.createElement('input');
    tempInput.value = postURL;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  
    showToast(`Link copied: ${postURL}`);
  }
  
  function share(platform) {
    const editor = document.getElementById('editor');
    let title = editor.innerText.trim().split('\n')[0];
    if (!title) {
      showToast("Add a title before sharing!");
      return;
    }
  
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    const postURL = `https://yourblog.com/post/${slug}`;
  
    const encodedURL = encodeURIComponent(postURL);
    const encodedTitle = encodeURIComponent(title);
  
    let shareURL = "";
    if (platform.toLowerCase() === "twitter") {
      shareURL = `https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`;
    } else if (platform.toLowerCase() === "facebook") {
      shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
    }
    
    window.open(shareURL, '_blank');
  }
  