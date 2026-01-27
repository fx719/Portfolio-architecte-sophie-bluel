const gallery = document.querySelector('.gallery')
const categoriesButtonsDiv = document.querySelector('.categories-buttons')
const authLink = document.getElementById('auth-link')
const header = document.querySelector("header")
const projectsTitle = document.querySelector(".projects-title")
const grid = document.querySelector(".projects-photo-grid")
const uploadedProjectCategories = document.getElementById("uploaded-project-categories")
const modalWindows = document.querySelectorAll("dialog")
const previousModalButton = document.getElementById('button-go-edit-projects-modal')

let currentModal = null
//Uses those selectors to help maintain the focus in the modal-windows

let focusableElements = []
let previouslyFocusedElement = null

//Contacts the API to get the works'data, then displays them.
let works = []
getDataFromAPI("http://127.0.0.1:5678/api/works")
    .then(data => {
        works = data
        displayWorks(gallery, works)
        displayWorksInModalGallery(grid, works)
    })


//Contacts the API to get the categories'data, used to display the filter's button, then displays them.
let categories = []
getDataFromAPI("http://127.0.0.1:5678/api/categories")
    .then(data => {
        categories = data
        displayCategoriesButtons(categoriesButtonsDiv, categories)
        displayCategoriesOptions(uploadedProjectCategories, categories)
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
    let currentModal = null
    const openModalLinks = document.querySelectorAll('.open-modal-link')
    displayWorksInModalGallery(grid, works)


    const closeModalButtons = document.querySelectorAll('.close-modal-button')

    openModalLinks.forEach(openModalLink => openModalLink.addEventListener('click', (e) => {
        displayModal(e, closeModalButtons, previousModalButton)
    }))

    modalWindows.forEach(modalWindow => {
        //if a modal window is opened, trap the tab-focus in it.
        modalWindow.addEventListener('toggle', (e) => {
            console.log(e)
            if (e.newState === "open") {
                modalWindow.addEventListener('keydown', (e) => {
                    if (e.key === 'Tab') {
                        focusInModal(e, modalWindow)
                    }
                })
            }
        }, { once: true })
    })



    //Event listener to logout the logged-in user.
    authLink.addEventListener("click", (e) => {
        logout(e, editModBanner, editFormLinkContent, buttonDisplayAllProjects)
    }, { once: true })

}


