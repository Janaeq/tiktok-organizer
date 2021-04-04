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
            <button class="deleteBtn" data-id=${this.id} data-action="delete">delete</button>
        </div>`
    }
}