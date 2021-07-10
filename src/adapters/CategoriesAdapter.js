"use strict";
class CategoriesAdapter {
    constructor(url) {
        this.url = url
    }
    // INDEX/SHOW
    getCategories = () => {
        // fetch request to base URL, then parse JSON from the response.
        // get categories to render when going back from one category
        fetch(this.url)
        .then(r => r.json())
        .then(categories => {
            const sorted = categories.sort((cat1, cat2) => cat1.name.localeCompare(cat2.name))
            sorted.map(category => {
                const c = new Category(category.id, category.name, category.videos)
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
            if (category.error) {
                displayMessage(category.error, 2000)
            } else {
                let newCategory = new Category(category.id, category.name, category.videos)
                newCategory.renderCategories()
                createCategoryBtn.style.display = ""
                categoryForm.style.display = "none"
                categoryInput.value = ""
            }
        })
        .catch(category => {
            displayMessage(category.error, 2000)
        })
    }
    // DESTROY
    deleteCategory(id) {
        fetch(this.url + `/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(category => {
            displayMessage(category.message, 2000)
        })
    }
}
