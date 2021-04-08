class Video {
    static all = []
    constructor(id, url, thumbnail_url, embedHTML, category_id) {
        this.id = id
        this.url = url
        this.embedHTML = embedHTML
        this.category_id = category_id
        this.thumbnail_url = thumbnail_url
        this.constructor.all.push(this)
    }
    // static makes it a class method
    static addEventListeners(videos) {
        videos.forEach(video => {
            console.log(video.id)
            const addVideoBtn = document.getElementById(`new-${video.category_id}`)
            addVideoBtn.addEventListener('click', this.removeBtnAndShowForm)
        })
        // const videoForm = document.querySelector('.add-video')
        // videoForm.addEventListener('submit', this.createVideo)
    }

    static removeBtnAndShowForm() {
        const videoForm = this.nextElementSibling
        this.style.display = 'none'
        videoForm.innerHTML += `<input type="text" name="url" value="" placeholder="TikTok URL" id="new-vid-inp"/>
        <input type="submit" name="submit" value="go arrow" class="submit"/>`
        videoForm.style = ""
    }

    static renderVideos(filteredVideos) {
        filteredVideos.forEach(video => {
            const videosContainer = document.getElementById(`cat-${video.category_id}`)
            videosContainer.firstElementChild.innerHTML += `<li style="display: inline;"><img src=${video.thumbnail_url} width="108" height="192"></li>`
        })
    }
}