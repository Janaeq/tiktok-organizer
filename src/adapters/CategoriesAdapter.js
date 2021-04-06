"use strict";
class CategoriesAdapter {
    constructor(url) {
        this.url = url
    }
    // INDEX/SHOW
    getCategories = () => {
        // fetch request to base URL, then parse JSON from the response.
        fetch(this.url)
            .then(r => r.json())
            .then(categories => {
                categories.map(category => {
                    const c = new Category(category.id, category.name)
                    c.renderCategories()
                })
            })
    }
    // CREATE
    createCategory = (e) => {
        e.preventDefault()
        const name = categoryInput.value
        let category = {name}

        return fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({category})
        })
        .then(r => r.json())
        .then(category => {
            let newCategory = new Category
            newCategory.id = category.id
            newCategory.name = category.name
            newCategory.renderCategories()
            createCategoryBtn.style.display = ""
            categoryForm.style.display = "none"
            categoryInput.value = ""
        })
    }
    // DESTROY
    deleteCategory(id) {
        fetch(this.url + `/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
    }
}
