// Example posts array
const posts = [
  {
    title: "First Blog Post",
    status: "Published",
    views: 1200,
    likes: 150
  },
  {
    title: "Travel Adventures",
    status: "Draft",
    views: 0,
    likes: 0
  },
  {
    title: "My Thoughts on Life",
    status: "Published",
    views: 850,
    likes: 85
  },
  {
    title: "Learning JavaScript",
    status: "Published",
    views: 600,
    likes: 90
  }
];

// Render posts in the All My Posts section
const postsList = document.getElementById("postsList");

posts.forEach(function(post) {
  const postDiv = document.createElement("div");
  postDiv.className = "post-item";

  postDiv.innerHTML = `
    <h3>${post.title}</h3>
    <p>Status: ${post.status}</p>
    <p>Views: ${post.views}</p>
    <p>Likes: ${post.likes}</p>
  `;

  postsList.appendChild(postDiv);
});
