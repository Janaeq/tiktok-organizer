"use strict";
class Category {
    static all = []
    constructor(id, name, videos) {
        this.id = id
        this.name = name
        this.videos = videos
        this.category = document.createElement('div')
        this.category.classList.add('category', 'text-capitalize', 'column')
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
            <button>
                <h3 style="display: inline-block;">${this.name}</h3>
            </button>`
        categoriesContainer.append(this.category)
        this.category.addEventListener('click', this.displayCategoryVideos)
    }

    // deleteCategory(e) {
    //     console.log(e.target)
        // if (e.target.classList.value === 'cat-delete-btn') {
        //     categoryAPI.deleteCategory(e.target.id.split('-')[1])
        //     this.remove()
        // }
    // }

    displayCategoryVideos() {
        // clear categories container
        const categoryId = parseInt(this.id.split('-')[1])
        const category = Category.all[categoryId - 1]
        categoriesContainer.innerHTML = `<h2 class="text-left" style="color: white">${category.name}</h2>`

        // filter over all videos
        // create an array containing all of this category's videos
        const filteredVideos = allVideos.filter(video => {
            return video.category_id === categoryId
        })
        // call a video function with the new array as the argument
        filteredVideos.forEach(video => {
            video.attachToDOM()
        })
        description.style.display = "none"
        categoryFormDiv.style.display = "none"
    }
}