class Categories {
    constructor() {
        this.categories = []
        this.adapter = new CategoryAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadCategories()
    }

    initBindingsAndEventListeners() {
        this.categoriesContainer = document.querySelector('.categories-container')
        this.createCategoryBtn = document.querySelector('.create-btn')
        this.createCategoryBtn.addEventListener('click', this.removeBtn)
    }

    removeBtn() {
        console.log('button is being removed')
        this.style.display = 'none'
    }

    fetchAndLoadCategories() {
        // makes a call to backend API using getCategories method (defined in categories.js)
        this.adapter
            .getCategories()
            .then(categories => {
                // pushes the categories from the API into the categores array defined above
                categories.forEach(category => this.categories.push(new Category(category)))
            })
            .then(() => {
                this.renderCategories()
            })
    }
    renderCategories() {
        // show categories on DOM
        this.categoriesContainer.innerHTML = this.categories.map(category => category.renderCategoryName()).join('')
    }
}
