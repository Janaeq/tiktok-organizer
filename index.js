let addBtn = false


document.addEventListener("DOMContentLoaded", () => {
    // category and video button
    const formBtn = document.querySelector('.create-form-btn')
    const formContainer = document.querySelector(".form-container")

    formBtn.addEventListener('click', () => {
        addBtn = !addBtn
        if (addBtn) { 
            formBtn.style.display = "none"; 
            formContainer.style.display = "block";
        } else { 
            formBtn.style.display = "block"
            formContainer.style.display = "none"
        }
    })

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
})
