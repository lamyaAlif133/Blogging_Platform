const posts = [
    { text: 'Morning Meditation Routines', img: 'images/meditation.jpg' },
    { text: 'AI in Everyday Life', img: 'Pictures/ai.jpg' },
    { text: 'Decorating with Plants', img: 'images/plants.jpg' },
    { text: 'Healthy Smoothie Recipes', img: 'images/smoothie.jpg' },
    { text: 'Beginner Yoga Poses', img: 'images/yoga.jpg' }
  ];
  
  let index = 0;
  
  function loadMorePosts() {
    const container = document.getElementById('randomPostList');
    for (let i = 0; i < 2 && index < posts.length; i++, index++) {
      const post = document.createElement('div');
      post.className = 'post-item';
      post.innerHTML = `<img src="${posts[index].img}" alt="${posts[index].text}"><p>${posts[index].text}</p>`;
      container.appendChild(post);
    }
  }
  