class CategoryAdapter {
    constructor() {
        this.baseURL = 'http://localhost:3000/categories'
    }

    getCategories() {
        // fetch request to base URL, then parse JSON from the response.
        return fetch(this.baseURL).then(r => r.json())
    }
}
