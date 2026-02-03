const gallery = document.querySelector('.gallery')
const categoriesButtonsDiv = document.querySelector('.categories-buttons')
const authLink = document.getElementById('auth-link')
const header = document.querySelector("header")
const projectsTitle = document.querySelector(".projects-title")
const grid = document.querySelector(".projects-photo-grid")
const uploadedProjectCategories = document.getElementById("uploaded-project-categories")
const modalWindows = document.querySelectorAll("dialog")
const previousModalButton = document.getElementById('button-go-edit-projects-modal')
const modalNavigationButtonsDiv = document.querySelectorAll('.modal-navigation-buttons')


//Uses this array  to help maintain the focus in the modal-windows

let focusableElements = []

//Contacts the API to get the works'data, then displays them.
let works = []
getDataFromAPI("http://127.0.0.1:5678/api/works")
    .then(data => {
        works = data
        displayWorks(gallery, works)
        displayWorksInModalGallery(grid, works)
        let deleteProjectButtons = document.querySelectorAll('.delete-project-button')
        if (sessionStorage.getItem("token")) {
            deleteProject(deleteProjectButtons)
        }
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
                let buttonId = parseInt(e.target.dataset.categoryId)
                displayWorksByCategory(gallery, buttonId)
            })
        }
    })


if (isAuthentified) {

    //Displays logged-in user interface, hides projects' filter buttons and adds the link used to display projects' edit forms in modal windows.
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
    const openModalLinks = document.querySelectorAll('.open-modal-link')
    displayWorksInModalGallery(grid, works)

    //Project's upload form Elements
    const addProjectButton = document.getElementById('add-project-button')
    const uploadProjectForm = document.querySelector('.add-projects-modal-form form')
    const uploadProjectFormWithoutButton = document.querySelectorAll('.add-projects-modal-form form input, select')
    const fileInputDiv = document.querySelector('.upload-file-input')
    const fileInput = document.getElementById('photo-uploader-input')
    const uploadedPicturePreview = document.querySelector('.uploaded-picture-preview')
    const neutralImgUrl = "./assets/icons/Vector.png"


    const closeModalButtons = document.querySelectorAll('.close-modal-button')

    openModalLinks.forEach(openModalLink => openModalLink.addEventListener('click', (e) => {
        displayModal(e, closeModalButtons, previousModalButton)
    }))




    //If a modal window is opened, traps the focus in it.
    modalWindows.forEach(modalWindow => {
        modalWindow.addEventListener('toggle', (e) => {

            if (e.newState === "open") {
                modalWindow.addEventListener('keydown', (e) => {
                    if (e.key === 'Tab') {
                        focusInModal(e, modalWindow)
                    }
                })
            }

        }, { once: true })
    })


    //Adjusts the display of the modal-windows' navigation buttons if more than one is displayed
    modalNavigationButtonsDiv.forEach(modalNavigationButtons => {
        if (modalNavigationButtons.children.length === 2) {
            modalNavigationButtons.setAttribute("style", "justify-content: space-between;")
        }
    })


    //Project's upload section

    //Making sure all fields are complete before enabling the submit button
    colorButtonIfFormIsComplete(uploadProjectFormWithoutButton, addProjectButton, '#1D6154', 'gray')

    //Preview the user's sent picture
    fileInput.addEventListener('change', (e) => {
        previewUploadedPicture(e, fileInput, neutralImgUrl, uploadedPicturePreview, fileInputDiv)
    })

    //Upload form data
    uploadProjectForm.addEventListener("submit", (e) => {
        uploadProject(e, fileInput, uploadProjectForm, modalWindows)
    })

    //Event listener to logout the logged-in user.
    authLink.addEventListener("click", (e) => {
        logout(e, editModBanner, editFormLinkContent, buttonDisplayAllProjects)
    }, { once: true })

}


