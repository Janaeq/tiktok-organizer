class Video {
    static all = []
    constructor(id, url, category_id) {
        this.id = id
        this.url = url
        this.category_id = category_id
        this.constructor.all.push(this)
    }

    static renderVideos(category_id) {
        const filteredVideos = this.all.filter(video => {
            return video.id === category_id
        })
        console.log(filteredVideos)
        const videosContainer = document.getElementById(`cat-${category_id}`)

    }
}