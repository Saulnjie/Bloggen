export const CMS_URL = "https://cms.saulnjie.tech"

export async function getPosts() {
    const response = await fetch(`${CMS_URL}/posts`)
    return await response.json()
}

export async function getPost(postId) {
    const response = await fetch(`${CMS_URL}/posts/${postId}`)
    return await response.json()
}
