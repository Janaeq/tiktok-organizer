class VideoAdapter {
    constructor(url) {
        this.url = url
    }

    // INDEX/SHOW
    getVideos = () => {
        fetch(this.url)
        .then(r => r.json())
        .then(videos => {
            videos.map(video => {
                const newVideo = new Video(
                    video.id,
                    video.url,
                    video.thumbnail_url,
                    video.embed_html,
                    video.category.id,
                )
            })
        })
    }

    // CREATE
    createVideo = (e) => {
        e.preventDefault()
        const category_id = parseInt(e.target.id.split('-')[2])
        const url = e.target.children[1].value
        let video = {url, category_id}
        fetch(this.url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({video})
        })
        .then(r => r.json())
        .then(video => {
            if (video.error) {
                displayMessage(video.error, 2000, category_id)
                document.getElementById(`new-vid-inp`).value = ""
            } else {
                let newVideo = new Video(
                    video.id,
                    video.url,
                    video.thumbnail_url,
                    video.embed_html,
                    video.category.id,
                )
                newVideo.attachToDOM()
                videoForm.style.display = "none"
                addVideoBtn.style = ""
            }
        })
    }

    // DELETE
    deleteVideo = (id) => {
        fetch(videoAPI.url + `/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(video => {
            displayMessage(video.message, 2000, video.category_id)
        })
    }
}