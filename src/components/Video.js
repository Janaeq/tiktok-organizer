class Video {
    static all = []
    constructor(id, url, thumbnail_url, embed_html, category_id) {
        this.id = id
        this.url = url
        this.embed_html = embed_html
        this.category_id = category_id
        this.thumbnail_url = thumbnail_url
        this.videoList = document.createElement('li')
        this.videoList.setAttribute('style', "list-style-type:none;")
        this.constructor.all.push(this)
    }

    static removeBtnAndShowForm(e) {
        if (e.target.classList.value === 'create-video-btn') {
            const btn = e.target
            const videoForm = btn.nextElementSibling
            const id = parseInt(videoForm.id.split('-')[1])
            btn.style.display = 'none'
            videoForm.innerHTML = `<input type="text" name="url" value="" placeholder="TikTok URL" id="vid-${id}"/>
                <input type="submit" name="submit" value="go arrow" class="submit"/>`
            videoForm.style = ""
            videoForm.addEventListener('submit', videoAPI.createVideo)
        }
    }

    attachToDOM() {
        this.videoList.innerHTML = `
        <img src=${this.thumbnail_url} width="108" height="192" id="img-${this.id}">
        <button class="vid-delete-btn" id="video-${this.id}" data-action="delete">DeleteVideo</button>`
        const videosContainer = document.querySelector(`div#cat-${this.category_id}.row`).firstElementChild 
        videosContainer.firstElementChild.appendChild(this.videoList)
        document.getElementById(`video-${this.id}`).addEventListener('click', this.deleteVideo)
        document.getElementById(`img-${this.id}`).addEventListener('click', this.showEmbeddedVideo)
    }

    deleteVideo() {
        videoAPI.deleteVideo(this.id.split('-')[1])
        this.parentElement.remove()
    }

    showEmbeddedVideo() {
        let vid = allVideos.find(video => {
            return video.id === parseInt(this.id.split('-')[1])
        })
        // const v = document.getElementById('embedded-video')
        // v.innerHTML = vid.embed_html
        document.getElementById(`cat-1`).lastElementChild.innerHTML = vid.embed_html
    }
}