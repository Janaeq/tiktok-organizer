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
            <button class="cat-delete-btn" id="category-${this.id}" data-action="delete">delete</button>
            <div class="videos" id="cat-${this.id}"><ul style="list-style-type:none;"></ul></div>`
        categoriesContainer.append(this.category)
        this.category.addEventListener('click', this.deleteCategory)
        Video.renderVideos(this.id)
    }

    deleteCategory(e) {
        if (e.target.classList.value === 'cat-delete-btn') {
            categoryAPI.deleteCategory(e.target.id.split('-')[1])
            this.remove()
        }
    }
}