const gallery = document.querySelector('.gallery')
const categoriesButtonsDiv = document.querySelector('.categories-buttons')
const authLink = document.getElementById('auth-link')
const header = document.querySelector("header")
const projectsTitle = document.querySelector(".projects-title")

//Uses those selectors to help maintain the focus in the modal-windows
const focusableSelector = "button, a , input, texarea"
let focusableElements = []
let previouslyFocusedElement = null

//Contacts the API to get the works'data, then displays them.
let works = []
getDataFromAPI("http://127.0.0.1:5678/api/works")
    .then(data => {
        works = data
        displayWorks(gallery, works)
    })


//Contacts the API to get the categories'data, used to display the filter's button, then displays them.
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

    //Identifies this element to hide it when the user logs out.
    const editModBanner = document.querySelector(".edit-mod-banner")

    //Identifies this element to display the first modal-window
    const editFormLinkContent = document.querySelector(".edit-form-link-content")


    //Displays modal-window 
    let modal = null
    console.log(modal)
    const editFormLink = document.getElementById('edit-form-link')
    editFormLink.addEventListener("click", displayModal)
    const grid = document.querySelector(".projects-photo-grid")
    console.log(document.querySelector(".projects-modal").attributes.style.value)

    window.addEventListener("keydown", (e) => {
        //Closes modal with "Esc" or "Escape" keydown event
        if (e.key === "Escape" || e.key === "Esc") {
            closeModal(e)
        }
        //Makes sure the focus doesn't go out of the modal-window
        if ((e.key === 'Tab') && (document.querySelector(".projects-modal").attributes.style.value !== "display: none;")) {

            focusInModal(e)
        }
    })

    //Event listener to logout the logged-in user.
    authLink.addEventListener("click", (e) => {
        logout(e, editModBanner, editFormLinkContent, buttonDisplayAllProjects)
    }, { once: true })

}


