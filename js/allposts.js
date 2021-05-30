import { getPosts, CMS_URL } from "./posts"
import * as dayjs from 'dayjs'

let postsToShow = []
let allPosts = []

const postsContainer = document.querySelector(".posts-container")

const loadMoreButton = document.querySelector("#load-more-button")

function renderPosts() {
    postsToShow.forEach((post) => {
        const postCard = document.createElement("div")
        const link = document.createElement("a");
        const date = dayjs(post.created_at).format('DD.MM.YYYY')
        const postContentContainer = document.createElement("div")
        postContentContainer.classList.add("post-content-container")

        link.innerText = "Read more"
        link.onclick = () => {
            window.location = `/post.html?postId=${post.id}`
        }

        postCard.innerHTML = `
            <img src="${CMS_URL}${post.coverPhoto.formats.small.url}" />

        `
        postContentContainer.innerHTML = `
            <span class"post-date">${date}</span>
            <span class="post-title">${post.title}</span>
            <span class="post-subtitle">${post.subtitle}</span>

            `
    
        postContentContainer.appendChild(link)
        postCard.appendChild(postContentContainer)
        postsContainer.appendChild(postCard)
    })
}

function renderTenNextPost() {
    const activePostCount = postsToShow.length;
    const nextTenPosts = allPosts.slice(activePostCount, activePostCount + 10)

    postsToShow = postsToShow.concat(nextTenPosts)

    postsContainer.innerHTML = ""
    renderPosts()

}

getPosts().then(posts => {
    const firstTenPosts = posts.slice(0, 10);
    postsToShow = firstTenPosts;
    allPosts = posts;

    renderPosts();
})

loadMoreButton.onclick = renderTenNextPost
