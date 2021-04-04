class Category {
    constructor(categoryJSON) {
        // console.log(categoryJSON)
        this.id = categoryJSON.id
        this.name = categoryJSON.name
    }

    renderCategoryName() {
        return `
        <div class="categories" data-id=${this.id}>
            <h3>${this.name}</h3>
        </div>`
    }
}