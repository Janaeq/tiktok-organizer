class Video {
    static all = []
    constructor(id, url, thumbnail_url, embed_html, category_id) {
        this.id = id
        this.url = url
        this.embed_html = embed_html
        this.category_id = category_id
        this.thumbnail_url = thumbnail_url
        this.videoList = document.createElement('ul')
        this.videoList.setAttribute('style', "list-style-type:none;")
        this.constructor.all.push(this)
    }

    static removeBtnAndShowForm(e) {
        if (e.target.classList.value === 'create-video-btn') {
            const btn = e.target
            const videoForm = btn.nextElementSibling
            const id = parseInt(videoForm.id.split('-')[1])
            btn.style.display = 'none'
            videoForm.innerHTML += `<input type="text" name="url" value="" placeholder="TikTok URL" id="vid-${id}"/>
                <input type="submit" name="submit" value="go arrow" class="submit"/>`
            videoForm.style = ""
            videoForm.addEventListener('submit', videoAPI.createVideo)
        }
    }

    attachToDOM() {
        const videosContainer = document.getElementById(`cat-${this.category_id}`).appendChild(this.videoList)
        videosContainer.innerHTML += `<li style="display: inline;">
            <img src=${this.thumbnail_url} width="108" height="192">
            <button class="vid-delete-btn" id="video-${this.id}" data-action="delete">DeleteVideo</button></li>`
        // add event listener to display embedded video
        // this.videoList.children[0].firstElementChild add embed event listener to this
        document.getElementById(`video-${this.id}`).addEventListener('click', this.deleteVideo)
    }

    deleteVideo(e) {
        videoAPI.deleteVideo(this.id.split('-')[1])
        this.parentElement.parentElement.remove()
    }
}