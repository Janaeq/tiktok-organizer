class VideoAdapter {
    constructor(url) {
        this.url = url
    }

    getVideos = () => {
        fetch(this.url)
        .then(r => r.json())
        .then(videos => {
            videos.map(video => {
                const newVideo = new Video
                newVideo.id = video.id
                newVideo.url = video.url
                newVideo.category_id = video.category_id
                newVideo.thumbnail_url = video.thumbnail_url
                newVideo.embedHTML = video.embedHTML
            })
        })
    }
}
// may have to nest URL in API to get localhost:3000/categories/:id/videos