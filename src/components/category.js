"use strict";
class Category {
    static all = []
    constructor(id, name, videos) {
        this.id = id
        this.name = name
        this.videos = videos
        this.category = document.createElement('div')
        this.category.classList.add('category', 'text-capitalize', 'col-sm-4')
        this.category.id = (`cat-${this.id}`)
        this.category.style.display = "inline"
        this.constructor.all.push(this)
    }

    static addEventListeners() {
        createCategoryBtn.addEventListener('click', this.removeBtnAndShowForm)
        categoryForm.addEventListener('submit', categoryAPI.createCategory)
    }

    static removeBtnAndShowForm() {
        this.style.display = 'none'
        categoryForm.style = ""
    }

    renderCategories = () => {
        this.category.innerHTML += `
            <div class="card" style="width: 18rem;">
                <h3>${this.name}</h3>
            </div>`
        categoriesContainer.append(this.category)
        this.category.addEventListener('click', this.displayCategoryVideos)
    }

    static deleteCategory(e) {
        categoryAPI.deleteCategory(e.target.id.split('-')[1])
        Category.goHome()
        categoryAPI.getCategories()
    }

    displayCategoryVideos() {
        // clear categories container
        const categoryId = parseInt(this.id.split('-')[1])
        const category = Category.all.find(category => {
           return category.id === categoryId
        })
        categoriesContainer.innerHTML = `
        <div>
            <h2 class="text-left" style="color: white; display: inline-block;">${category.name}</h2>
            <i id="del-${category.id}" class="far fa-trash-alt" style="margin-left: 5px;"></i>
        </div>
        <br>
        <br>`

        document.getElementById(`del-${category.id}`).addEventListener('click', Category.deleteCategory)
        // filter over all videos
        // create an array containing all of this category's videos
        const filteredVideos = allVideos.filter(video => {
            return video.category_id === categoryId
        })

        // call a video function to attach video to dom
        filteredVideos.forEach(video => {
            video.attachToDOM()
        })

        description.style.display = "none"
        categoryFormDiv.style.display = "none"
        addVideoBtn.id += categoryId
        videoForm.id += categoryId
        addVideoBtn.style.display = "inline"
        backToCategories.style.display = "inline"
        addVideoBtn.addEventListener('click', Video.removeBtnAndShowForm)
        backToCategories.addEventListener('click', Category.goHome)
    }

    static goHome() {
        addVideoBtn.style.display = "none"
        videoForm.style.display = "none"
        backToCategories.style.display = "none"
        description.style = ""
        categoryFormDiv.style = ""
        categoriesContainer.innerText = ""
        videoForm.id = 'add-video-'
        addVideoBtn.id = 'vid-btn-'
    }
}