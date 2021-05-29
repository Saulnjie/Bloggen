import { CMS_URL, getPost } from "./posts"
import marked from "marked"

const postContainer = document.querySelector(".post-container")
const postId = new URLSearchParams(window.location.search).get("postId")
const banner = document.querySelector(".full-screen-banner")

getPost(postId)
    .then(post => {
        const article = document.createElement("article")

        const body = post.body.replaceAll("/uploads", `${CMS_URL}/uploads`)
        article.innerHTML = marked(body)
        postContainer.appendChild(article)

        const titleContainer = document.createElement("div");
        
        titleContainer.innerHTML = `
            <h1>${post.title}</h1>
            <span>${post.subtitle}</span>
        `

        banner.appendChild(titleContainer)
        banner.style.backgroundImage = `url(${CMS_URL}${post.coverPhoto.formats.large.url})`
    })

