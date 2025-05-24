let categories = [];
let posts = [];

function addCategory() {
  const newCategory = document.getElementById('new-category').value.trim();
  if (newCategory && !categories.includes(newCategory)) {
    categories.push(newCategory);
    document.getElementById('new-category').value = '';
    updateCategoryUI();
  }
}

function updateCategoryUI() {
  const categoryList = document.getElementById('category-list');
  const categoryAssign = document.getElementById('category-assignment');
  const filterCategories = document.getElementById('filter-categories');

  categoryList.innerHTML = '';
  categoryAssign.innerHTML = '';
  filterCategories.innerHTML = '';

  categories.forEach(category => {
    // Category Manager List
    const li = document.createElement('li');
    li.textContent = category;
    categoryList.appendChild(li);

    // Category Assignment Checkboxes
    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox" value="${category}"> ${category}`;
    categoryAssign.appendChild(label);

    // Sidebar Filter
    const filterLi = document.createElement('li');
    filterLi.innerHTML = `<button onclick="filterPosts('${category}')">${category}</button>`;
    filterCategories.appendChild(filterLi);
  });

  const showAllBtn = document.createElement('button');
  showAllBtn.textContent = 'Show All';
  showAllBtn.onclick = showAllPosts;
  filterCategories.appendChild(showAllBtn);
}

function createPost() {
  const title = document.getElementById('post-title').value.trim();
  const content = document.getElementById('post-content').value.trim();
  const tags = document.getElementById('post-tags').value.trim().split(',').map(tag => tag.trim()).filter(tag => tag !== '');
  const selectedCategories = Array.from(
    document.querySelectorAll('#category-assignment input:checked')
  ).map(input => input.value);

  if (title && content) {
    posts.push({ title, content, categories: selectedCategories, tags });
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('post-tags').value = '';
    updatePostList();
    updateTagFilterUI();
  }
}

function updatePostList(filteredPosts = posts) {
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';

  filteredPosts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <small>Categories: ${post.categories.join(', ')}</small>
      <small>Tags: ${post.tags.join(', ')}</small>
    `;
    postList.appendChild(postDiv);
  });
}

function filterPosts(category) {
  const filtered = posts.filter(post => post.categories.includes(category));
  updatePostList(filtered);
}

function filterPostsByTag(tag) {
  const filtered = posts.filter(post => post.tags.includes(tag));
  updatePostList(filtered);
}

function showAllPosts() {
  updatePostList();
}

function updateTagFilterUI() {
  const tagSet = new Set();
  posts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)));

  const tagContainer = document.getElementById('filter-tags');
  tagContainer.innerHTML = '';

  tagSet.forEach(tag => {
    const li = document.createElement('li');
    li.innerHTML = `<button onclick="filterPostsByTag('${tag}')">${tag}</button>`;
    tagContainer.appendChild(li);
  });

  const showAllBtn = document.createElement('button');
  showAllBtn.textContent = 'Show All';
  showAllBtn.onclick = showAllPosts;
  tagContainer.appendChild(showAllBtn);
}
