class Categories {
    constructor() {
        this.categories = []
        this.adapter = new CategoryAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadCategories()
    }

    initBindingsAndEventListeners() {
        this.categoriesContainer = document.querySelector('.categories-container')
        this.createCategoryBtn = document.querySelector('#cat-btn')
        this.createCategoryBtn.addEventListener('click', this.removeBtnAndShowForm)
        this.categoryForm = document.querySelector('.add-category')
        this.categoryForm.addEventListener('submit', this.createCategory.bind(this))
        this.newCategoryInput = document.getElementById('new-cat-inp')
    }

    removeBtnAndShowForm() {
        // console.log('button is being removed')
        this.style.display = 'none'
        document.querySelector('.add-category').style = ""
    }

    createCategory(e) {
        e.preventDefault()
        const inp = this.newCategoryInput
        this.adapter.createCategory(inp.value)
            .then(category => {
                console.log(category)
                this.categories.push(new Category(category))
                this.renderCategories()
            })
        inp.value = ""
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
