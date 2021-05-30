import {  CMS_URL,  getPosts } from "./posts"
let carouselPosts = []
let allPosts = []

const carouselPostsContainer = document.querySelector(".carousel-posts-container")
const nextButton = document.querySelector("#next-posts")
const previousButton = document.querySelector("#previous-posts")


function renderCarouselPosts() {

    if (carouselPosts.length > 0) {
        carouselPostsContainer.innerHTML = ""
    }

    carouselPosts.forEach(post => {
        const postCard = document.createElement("div");

        postCard.innerHTML = `
            <img src="${CMS_URL}${post.coverPhoto.formats.small.url}" />
            <span>${post.title}</span>
        `
        carouselPostsContainer.appendChild(postCard)
    })
}

function getNextFourPosts() {
    const lastPost = carouselPosts.slice(-1)[0]
    const lastPostIndex = allPosts.findIndex(post => post.id === lastPost.id)

    const nextPosts = allPosts.slice(lastPostIndex + 1, lastPostIndex + 5)

    if (nextPosts.length === 0) return;

    carouselPosts = nextPosts
    renderCarouselPosts()
}

function getPreviousPosts() {
    const firstPost = carouselPosts[0]
    
    const firstPostIndex = allPosts.findIndex(post => post.id === firstPost.id)
    const nextPosts = allPosts.slice(firstPostIndex - 4, firstPostIndex)
    if (nextPosts.length === 0) return;

    carouselPosts = nextPosts
    renderCarouselPosts()
}

getPosts()
    .then(posts => {
        const firstFourPosts = posts.slice(0, 4);
        carouselPosts = firstFourPosts;
        allPosts = posts
        renderCarouselPosts()
    })

nextButton.onclick = getNextFourPosts
previousButton.onclick = getPreviousPosts