// let addBtn = false


// document.addEventListener("DOMContentLoaded", () => {
    // category and video button
    // const formBtn = document.querySelector('.create-form-btn')
    // const formContainer = document.querySelector(".form-container")

    // formBtn.addEventListener('click', () => {
    //     addBtn = !addBtn
    //     if (addBtn) { 
    //         formBtn.style.display = "none"; 
    //         formContainer.style.display = "block";
    //     } else { 
    //         formBtn.style.display = "block"
    //         formContainer.style.display = "none"
    //     }
    // })

    // function for each category 
        // <div class="row">
        //     <div class="column">
        //         <p>Thumbnails</p>
        //          function for each category.video display thumbnail in this column
                    // on thumbnail click, display video as embedded video to the right of thumbnails
        //     </div>
        //     <div class="column">
        //         <p>Embedded video</p>
        //          retrived from tiktok embedded api
        //     </div>
        // </div>
// })

function clickBtn() {
    let btn = document.querySelector('.create-btn')
    btn.addEventListener('click', e => {
        if (e.target.innerText === "Create Category") {
            categoryForm()
        } else {
            // form for new vid
        }
    })
}


function categoryForm() {
    let div = document.querySelector('.create-cat')
    div.innerHTML = `
        <form class="add-category">
            <h3>Create Category</h3>
            <input type="text" name="name" value="" placeholder="i.e: Cats" class="user-input"/>
            <input type="submit" name="submit" value="go arrow" class="submit"/>
        </form>`

}

// GET
let categoryCollection = document.querySelector('.categories')
fetch('http://localhost:3000/categories')
    .then(r => r.json())
    .then(categories => {
        let categoryHTML = categories.map(category => {
            return `
            <div class="list">
                <h3>${category.name}</h3>
                <div class="column" id="thumbnail">
                    thumbnails of all videos in this category (from API)
                </div>
                <div class="column" id="embed">
                    embedded video of <a href="${category.videos[0].url}">this tiktok</a>
                </div>
            </div>`
        })
        categoryCollection.innerHTML += categoryHTML.join('')
    })
