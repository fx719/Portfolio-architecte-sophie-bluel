const gallery = document.querySelector('.gallery')
const categoriesButtonsDiv = document.querySelector('.categories-buttons')
const authLink = document.getElementById('auth-link')
const header = document.querySelector("header")
const projectsTitle = document.querySelector(".projects-title")

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

if (isAuthentified) {
    authLink.setAttribute("href", "#")
    authLink.innerText = "logout"
    addEditModBanner(header)
    const buttonDisplayAllProjects = document.getElementById('0')
    buttonDisplayAllProjects.removeAttribute("autofocus")
    categoriesButtonsDiv.setAttribute("style", "display:none;")
    addEditFormLink(projectsTitle)
    const editModBanner = document.querySelector(".edit-mod-banner")
    const editFormLinkContent = document.querySelector(".edit-form-link-content")
    authLink.addEventListener("click", (e) => {
        logout(e, editModBanner, editFormLinkContent, buttonDisplayAllProjects)
    }, { once: true })
    let modal = null
    const editFormLink = document.getElementById('edit-form-link')
    editFormLink.addEventListener("click", displayModal)
    const grid = document.querySelector(".projects-photo-grid")
} else {

}


