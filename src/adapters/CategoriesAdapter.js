class CategoryAdapter {
    constructor() {
        this.baseURL = 'http://localhost:3000/categories'
    }

    getCategories() {
        // fetch request to base URL, then parse JSON from the response.
        return fetch(this.baseURL).then(r => r.json())
    }

    createCategory(x) {
        const category = {
            name: x
        }
        return fetch(this.baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({category})
        })
        .then(r => r.json())
    }
}
