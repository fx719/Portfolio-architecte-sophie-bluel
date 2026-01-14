const gallery = document.querySelector('.gallery')
const categoriesButtonsDiv = document.querySelector('.categories-buttons')

//if browser's configuration prevents session's storage persistence
// const url = new URL(window.location)
// if (url.searchParams) {
//     const urlParams = url.searchParams
//     window.sessionStorage.setItem('userId', parseInt(urlParams.get("userId")))
//     window.sessionStorage.setItem('token', urlParams.get("token"))
// }

let works = []
getDataFromAPI("http://127.0.0.1:5678/api/works")
    .then(data => {
        works = data
        displayWorks(gallery, works)
    })



let categories = []
getDataFromAPI("http://127.0.0.1:5678/api/categories")
    .then(data => {
        categories = data
        displayCategoriesButtons(categoriesButtonsDiv, categories)
        const workCategoryButtons = document.querySelectorAll('.work-category-button')
        for (let workCategoryButton of workCategoryButtons) {
            workCategoryButton.addEventListener("click", (e) => {
                let buttonId = parseInt(e.target.dataset.id)
                displayWorksByCategory(gallery, buttonId)
            })
        }
    })
