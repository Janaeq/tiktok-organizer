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
const allVideos = Video.all
videoAPI.getVideos()

// Messages
const displayMessage = (message, duration) => {
    const msg = document.createElement("div")
    msg.classList.add("message")
    msg.innerHTML = `<p>${message}</p>`
    categoryForm.parentElement.append(msg)
    setTimeout(function () {
      msg.parentElement.removeChild(msg)
    }, duration)
  }