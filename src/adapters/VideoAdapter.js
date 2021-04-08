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
                const newVideo = new Video
                newVideo.id = video.id
                newVideo.url = video.url
                newVideo.category_id = video.category_id
                newVideo.thumbnail_url = video.thumbnail_url
                newVideo.embed_html = video.embed_html
            })
        })
    }

    // CREATE
    createVideo = (e) => {
        e.preventDefault()
        const category_id = parseInt(e.target.id.split('-')[1])
        const url = e.target.children[2].value
        const errors = e.target.children[1]
        let video = {url, category_id}

        if (url === "") {
            errors.innerHTML = 'Please try again'
        } else {
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
                let newVideo = new Video
                newVideo.id = video.id
                newVideo.url = video.url
                newVideo.thumbnail_url = video.thumbnail_url
                newVideo.embed_html = video.embed_html
                newVideo.category_id = video.category_id
                newVideo.attachToDOM()
                document.getElementById(`form-${newVideo.category_id}`).style.display = "none"
                document.getElementById(`new-${video.category_id}`).style = ""
            })
        }
    }

    // DELETE
    deleteVideo = (id) => {
        fetch(videoAPI.url + `/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
    }
}