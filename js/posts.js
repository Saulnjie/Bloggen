
const postsContainer = document.querySelector(".posts-container");
const STRAPI_URL = "https://cms.alinjie.io"

let posts;

const postsToShow = []

function addNextPosts() {
    const countOfActivePosts = postsToShow.length
    const nextFourPosts = posts.slice(countOfActivePosts, countOfActivePosts + 2)
    nextFourPosts.forEach(post => postsToShow.push(post))
    insertPosts()
}

function insertPosts() {
    postsContainer.innerHTML = ""

    postsToShow.forEach(post => {

        const article = document.createElement("article")
        const createdAt = post.created_at
        const year = createdAt.substring(0, 4)
        const month = createdAt.substring(5, 7)
        const day = createdAt.substring(8, 10)

        article.className = "post-preview"

        const thumbnail = `${STRAPI_URL}${post.coverPhoto.formats.thumbnail.url}`
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
    posts =  await response.json()

    const firstFourPosts = posts.slice(0, 10)

    firstFourPosts.forEach((post) => {
        postsToShow.push(post)
    })
}


getPosts().then(insertPosts)



const loadMoreButton = document.querySelector("#load-more-button");

loadMoreButton.onclick = addNextPosts