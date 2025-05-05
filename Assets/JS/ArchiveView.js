
const posts = [
    { title: "Post 1", date: "2024-04-28", content: "Content of post 1" },
    { title: "Post 2", date: "2023-05-15", content: "Content of post 2" },
    { title: "Post 3", date: "2022-06-10", content: "Content of post 3" },
    { title: "Post 4", date: "2024-04-28", content: "Content of post 4" },
    { title: "Post 5", date: "2023-04-28", content: "Content of post 5" },
];


function populateDateFilter() {
    const yearSelect = document.getElementById("year");
    const monthSelect = document.getElementById("month");

    const years = [...new Set(posts.map(post => post.date.split('-')[0]))];
    years.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });

    for (let i = 1; i <= 12; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        monthSelect.appendChild(option);
    }
}


function displayPosts(year, month) {
    const filteredPosts = posts.filter(post => {
        const [postYear, postMonth] = post.date.split('-');
        return postYear === year && (month === "all" || postMonth === month);
    });

    const archivePosts = document.getElementById("archive-posts");
    archivePosts.innerHTML = '';
    filteredPosts.forEach(post => {
        const li = document.createElement("li");
        li.textContent = `${post.title} - ${post.date}`;
        archivePosts.appendChild(li);
    });
}

function showOnThisDay() {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0]; // YYYY-MM-DD
    const postsFromToday = posts.filter(post => post.date === dateString);

    const archivePosts = document.getElementById("archive-posts");
    archivePosts.innerHTML = '';
    postsFromToday.forEach(post => {
        const li = document.createElement("li");
        li.textContent = `${post.title} - ${post.date}`;
        archivePosts.appendChild(li);
    });
}


function exportAsJSON() {
    const data = JSON.stringify(posts, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = 'archive.json';
    a.click();
}

function exportAsXML() {
    let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n<posts>';
    posts.forEach(post => {
        xmlContent += `\n  <post>`;
        xmlContent += `\n    <title>${post.title}</title>`;
        xmlContent += `\n    <date>${post.date}</date>`;
        xmlContent += `\n    <content>${post.content}</content>`;
        xmlContent += `\n  </post>`;
    });
    xmlContent += '\n</posts>';

    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = 'archive.xml';
    a.click();
}

document.getElementById("filter-btn").addEventListener("click", () => {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    displayPosts(year, month);
});

document.getElementById("on-this-day-btn").addEventListener("click", showOnThisDay);
document.getElementById("export-json").addEventListener("click", exportAsJSON);
document.getElementById("export-xml").addEventListener("click", exportAsXML);


populateDateFilter();
displayPosts(new Date().getFullYear().toString(), "all");
