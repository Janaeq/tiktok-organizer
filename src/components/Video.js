class Video {
    static all = []
    constructor(id, url, thumbnail_url, embed_html, category_id) {
        this.id = id
        this.url = url
        this.thumbnail_url = thumbnail_url
        this.embed_html = embed_html
        this.category_id = category_id
        this.videoGrid = document.createElement('div')
        this.videoGrid.classList.add('col-md-3', 'col-sm-4', 'col-xs-6')
        this.videoGrid.id = `video-${this.id}`
        this.constructor.all.push(this)
    }

    static removeBtnAndShowForm() {
        addVideoBtn.style.display = 'none'
        videoForm.style = ""
        newVideoValue.value = ""
        videoForm.addEventListener('submit', videoAPI.createVideo)
        
    }

    attachToDOM() {
        this.videoGrid.innerHTML = `<img class="thumbnail" style="display: inline" src=${this.thumbnail_url} width="216" height="384" id="img-${this.id}">`
        categoriesContainer.appendChild(this.videoGrid)
        this.videoGrid.firstElementChild.addEventListener('click', this.showOptions)
    }

    showOptions() {
        const parent = this.parentElement
        const icons = document.createElement('div')
        icons.classList = "icons"
        icons.id = `${this.id}-icons`
        icons.innerHTML = `
            <i class="far fa-play-circle fa-2x"></i>
            <br>
            <br>
            <i class="far fa-trash-alt fa-2x"></i>`
        if (parent.lastElementChild === this) {
            // icons.style.display = "inline-block"
            parent.appendChild(icons)
            parent.lastElementChild.addEventListener('click', Video.handleOptions)
        } else {
            parent.lastElementChild.remove()
        }
    }

    static handleOptions(e) {
        const videoId = parseInt(this.id.split('-')[1])
        if (e.target.classList.contains('fa-play-circle')) {
            Video.showEmbeddedVideo(videoId)
            this.style.display = "none"
        } else if (e.target.classList.contains('fa-trash-alt')) {
            Video.deleteVideo(videoId)
        }
    }

    static deleteVideo(id) {
        videoAPI.deleteVideo(id)
        document.getElementById(`video-${id}`).remove()
    }

    static showEmbeddedVideo(id) {
        let vid = allVideos.find(video => {
            return video.id === id
        })
        overlay.style = ""
        embeddedVideo.style = ""
        embeddedVideo.innerHTML = vid.embed_html
        overlay.addEventListener('click', Video.removeEmbeddedVideo)
        // jquery for deployment
        // $("#embedded-video").load(location.href + " #embedded-video");
    }

    static removeEmbeddedVideo() {
        overlay.style.display = "none"
        embeddedVideo.style.display = "none"
    }
}