"use strict";

// Category
const categoryAPI = new CategoriesAdapter('http://localhost:3000/categories')
const categoriesContainer = document.querySelector('#categories-container')
const createCategoryBtn = document.querySelector('#cat-btn')
const categoryForm = document.querySelector('.add-category')
const categoryInput = document.getElementById('new-cat-inp')
categoryAPI.getCategories()
Category.addEventListeners()

// Video
const videoAPI = new VideoAdapter('http://localhost:3000/videos')
videoAPI.getVideos()