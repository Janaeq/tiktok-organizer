class Category {
    constructor(categoryJSON) {
        // console.log(categoryJSON)
        this.id = categoryJSON.id
        this.name = categoryJSON.name
    }

    renderCategoryName() {
        return `<div class="categories"><h3>${this.name}</h3></div>`
    }
}