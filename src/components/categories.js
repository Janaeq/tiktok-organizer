class Categories {
    constructor() {
        this.categories = []
        this.adapter = new CategoryAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadCategories()
    }

    fetchAndLoadCategories() {
        // makes a call to backend API using getCategories method (defined in categories.js)
        this.adapter
            .getCategories()
            .then(categories => {
                // pushes the categories from the API into the categores array defined above
                categories.forEach(category => this.categories.push(new Category(category)))
                console.log(this.categories)
            })
            .then(() => {
                this.renderCategories()
            })
    }
    renderCategories() {
        // show categories on DOM
        console.log("manipulate DOM here")
    }
}
