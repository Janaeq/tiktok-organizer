class Video {
    static all = []
    constructor(id, url, thumbnail_url, embed_html, category_id) {
        this.id = id
        this.url = url
        this.embed_html = embed_html
        this.category_id = category_id
        this.thumbnail_url = thumbnail_url
        this.constructor.all.push(this)
    }
    // static makes it a class method
    static addEventListeners(videos) {
        videos.forEach(video => {
            const addVideoBtn = document.getElementById(`new-${video.category_id}`)
            addVideoBtn.addEventListener('click', this.removeBtnAndShowForm)
            const videoForm = document.getElementById(`form-${video.category_id}`)
            videoForm.addEventListener('submit', videoAPI.createVideo)
        })
    }

    static removeBtnAndShowForm() {
        const videoForm = this.nextElementSibling
        this.style.display = 'none'
        videoForm.innerHTML += `<input type="text" name="url" value="" placeholder="TikTok URL" id="vid-${this.id}"/>
        <input type="submit" name="submit" value="go arrow" class="submit"/>`
        videoForm.style = ""
    }

    static renderVideos(filteredVideos) {
        filteredVideos.forEach(video => {
            const videosContainer = document.getElementById(`cat-${video.category_id}`).children[0]
            videosContainer.innerHTML += `<li style="display: inline;"><img src=${video.thumbnail_url} width="108" height="192"></li>`
        })
    }

    attachToDOM() {
        const videosContainer = document.getElementById(`cat-${this.category_id}`).children[0]
        videosContainer.innerHTML += `<li style="display: inline;"><img src=${this.thumbnail_url} width="108" height="192"></li>`
    }
}