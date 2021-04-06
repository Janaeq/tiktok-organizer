class VideoAdapter {
    constructor(url) {
        this.url = url
    }
    getVideos = () => {
        fetch(this.url)
        .then(r => r.json())
        .then(videos => {
            videos.map(video => {
                const newVideo = new Video(video.id, video.url)
            })
        })
    }
}
// may have to nest URL in API to get localhost:3000/categories/:id/videos