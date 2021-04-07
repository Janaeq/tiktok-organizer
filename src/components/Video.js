class Video {
    static all = []
    constructor(id, url, thumbnail_url, embedHTML, category_id) {
        this.id = id
        this.url = url
        this.embedHTML = embedHTML
        this.category_id = category_id
        this.thumbnail_url = thumbnail_url
        this.constructor.all.push(this)
    }

    static renderVideos(category_id) {
        const filteredVideos = this.all.filter(video => {
            return video.category_id === category_id
        })
        filteredVideos.forEach(video => {
            const videosContainer = document.getElementById(`cat-${category_id}`)
            videosContainer.firstElementChild.innerHTML = `<li style="display: inline;"><img src=${video.thumbnail_url} width="108" height="192"></li>`
        })
    }
}