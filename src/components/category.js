"use strict";
class Category {
    static categories = []
    constructor(id, name) {
        this.id = id
        this.name = name
        this.category = document.createElement('div')
        this.category.classList.add('category')
        this.constructor.categories.push(this)
    }

    static addEventListeners() {
        createCategoryBtn.addEventListener('click', this.removeBtnAndShowForm)
        categoryForm.addEventListener('submit', categoryAPI.createCategory)
        categoriesContainer.addEventListener('click', this.deleteCategory)
    }

    static removeBtnAndShowForm() {
        this.style.display = 'none'
        categoryForm.style = ""
    }

    renderCategories = () => {
        this.category.innerHTML += `
            <h3>${this.name}</h3>
            <button class="cat-delete-btn" id="category-${this.id}" data-action="delete">DeleteCategory</button>
            <button class="create-video-btn" id="new-${this.id}">Add Video</button>
            <form class="add-video" style="display: none;"><p>Add Video</p></form>
            <div class="videos" id="cat-${this.id}"><ul style="list-style-type:none;"></ul></div>`
        categoriesContainer.append(this.category)
        this.category.addEventListener('click', this.deleteCategory)
    }

    deleteCategory(e) {
        if (e.target.classList.value === 'cat-delete-btn') {
            categoryAPI.deleteCategory(e.target.id.split('-')[1])
            this.remove()
        }
    }

    displayCategoryVideos() {
        // filter over all videos
        // create an array containing all of this category's videos
        const filteredVideos = allVideos.filter(video => {
            return video.category_id === this.id
        })
        // call a video function with the new array as the argument
        Video.renderVideos(filteredVideos)
    }
}