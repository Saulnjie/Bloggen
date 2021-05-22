
const STRAPI_URL = "https://cms.alinjie.io"

function insertPosts(posts) {
    const postsContainer = document.querySelector(".posts-container");

    posts.forEach(post => {

        const article = document.createElement("article")
        const createdAt = post.created_at
        const year = createdAt.substring(0, 4)
        const month = createdAt.substring(5, 7)
        const day = createdAt.substring(8, 10)

        article.className = "post-preview"

        const thumbnail = `${STRAPI_URL}${post.coverPhoto.formats.small.url}`
        article.innerHTML = `
        <img src="${thumbnail}" class="post-thumbnail" />
        <div class="article-content"> 
            <span>${day}.${month}.${year}</span>
            <p>${post.subtitle}</p>
            <div class="read-more-container">
                <a>Read more</a>
                <i class="fas fa-arrow-right"></i>
            </div>
        
        </div>

        `

        postsContainer.appendChild(article)
    })
}

async function getPosts() {
    const response = await fetch(`${STRAPI_URL}/posts`);

    console.log("Running")
    return await response.json()
}


getPosts().then(insertPosts)