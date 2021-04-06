"use strict";

// Category
const categoriesContainer = document.querySelector('#categories-container')
const categoryAPI = new CategoriesAdapter('http://localhost:3000/categories')
const createCategoryBtn = document.querySelector('#cat-btn')
const categoryForm = document.querySelector('.add-category')
const categoryInput = document.getElementById('new-cat-inp')
categoryAPI.getCategories()
Category.addEventListeners()

