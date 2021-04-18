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

    static removeBtnAndShowForm(e) {
        if (e.target.classList.value === 'create-video-btn') {
            const btn = e.target
            const videoForm = btn.nextElementSibling.firstElementChild
            const id = parseInt(videoForm.id.split('-')[1])
            btn.style.display = 'none'
            videoForm.innerHTML = `<input type="url" name="url" value="" placeholder="TikTok URL" id="vid-${id}"/>
                <input type="submit" name="submit" value="go arrow" class="submit"/>`
            videoForm.style = ""
            videoForm.addEventListener('submit', videoAPI.createVideo)
        }
    }

    attachToDOM() {
        this.videoGrid.innerHTML = `<img class="thumbnail" src=${this.thumbnail_url} width="216" height="384" id="img-${this.id}">`
        categoriesContainer.appendChild(this.videoGrid)
        this.videoGrid.addEventListener('click', this.showEmbeddedVideo)
    }

    deleteVideo() {
        videoAPI.deleteVideo(this.id.split('-')[1])
        this.parentElement.remove()
    }

    showEmbeddedVideo() {
        let vid = allVideos.find(video => {
            return video.id === parseInt(this.id.split('-')[1])
        })
        const v = document.getElementById('embedded-video')
        v.innerHTML = vid.embed_html
    }
}