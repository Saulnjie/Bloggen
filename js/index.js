const carouselPostsContainer = document.querySelector(".carousel-posts-container");

let allPosts = []
let shownPosts = []

document.querySelector("#previous-four").onclick = () => {
  console.log("Prev")
};

document.querySelector("#next-four").onclick = () => {
  
};


function renderPost(post) {
  const article = document.createElement("article");

  article.innerHTML = `
    <div class="article-preview-card">
      <img src="https://cms.alinjie.io${post.coverPhoto.formats.thumbnail.url}" />
      <h2>${post.title}</h2>
      <p>${post.subtitle}</p>
    </div>
  `

  carouselPostsContainer.appendChild(article)
}


fetch("https://cms.alinjie.io/posts")
    .then(res => res.json())
    .then(posts => {
      allPosts = posts
      shownPosts = allPosts.slice(0, 4)

      shownPosts.forEach(renderPost)
    })

  