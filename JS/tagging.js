function addTag() {
    const input = document.getElementById('tagInput');
    const tag = input.value.trim();
    if (tag) {
      const tagContainer = document.getElementById('tagContainer');
      const span = document.createElement('span');
      span.textContent = `#${tag}`;
      span.onclick = function() {
        tagContainer.removeChild(span);
      };
      tagContainer.appendChild(span);
      input.value = '';
    }
  }
  