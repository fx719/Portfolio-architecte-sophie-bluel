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
                let buttonId = parseInt(e.target.dataset.id)
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


    //Handles the project upload inputs
    const addProjectButton = document.getElementById('add-project-button')
    const uploadProjectForm = document.querySelector('.add-projects-modal-form form')
    const uploadProjectFormWithoutButton = document.querySelectorAll('.add-projects-modal-form form input, select')
    const fileInputDiv = document.querySelector('.upload-file-input')
    const fileInput = document.getElementById('photo-uploader-input')
    const uploadedPicturePreview = document.querySelector('.uploaded-picture-preview')


    //Making sure all fields are complete before enabling the submit button
    uploadProjectFormWithoutButton.forEach(formElement => {
        formElement.addEventListener('input', (e) => {

            let filledForm = Array.from(uploadProjectFormWithoutButton).filter(formElement => formElement.value !== "")

            if (filledForm.length === 3) {
                addProjectButton.setAttribute("style", "background-color: #1D6154;")
            }

            if (filledForm.length < 3) {
                addProjectButton.setAttribute("style", "background-color: gray;")
            }
        })

    })

    //Preview the user's sent picture
    fileInput.addEventListener('change', (e) => {

        try {

            const uploadedFile = fileInput.files[0]
            const reader = new FileReader()
            console.log(e)
            if (e.target.value === "") {
                uploadedPicturePreview.src = "./assets/icons/Vector.png"
                uploadedPicturePreview.removeAttribute("style")
                fileInputDiv.removeAttribute("style")
                for (let i = 1; i < fileInput.labels.length; i++) {

                    fileInput.labels[i].removeAttribute("style")

                }

            }
            //note du 31/01 : factoriser ajout dynamique porjet dom en dessous en priorité (sûrement via les fonctions displayWorks etc.)

            if (uploadedFile === undefined) {

            } else {
                reader.readAsDataURL(uploadedFile)
                reader.addEventListener('loadend', (loadEvent) => {
                    uploadedPicturePreview.src = reader.result
                    uploadedPicturePreview.setAttribute("style", "width : 100%; height: 149px; max-width: 100%;")

                    for (let i = 1; i < fileInput.labels.length; i++) {

                        fileInput.labels[i].setAttribute("style", "display: none;")

                    }
                    fileInputDiv.setAttribute("style", "padding-top: 0; padding-bottom: 0; gap: 0;")
                })
            }
        } catch (error) {
            console.error(error)
        }

    })


    //Access form data
    uploadProjectForm.addEventListener("submit", (e) => {

        try {

            e.preventDefault()
            const textRegEx = new RegExp("[a-zéàâçèêô0-9-(): ]{4,}", "gmi")
            const data = new FormData()
            const uploadedFile = fileInput.files[0]

            if (fileInput.value !== "" && uploadedFile.size < 4194304 && (uploadedFile.name.endsWith('jpg') || uploadedFile.name.endsWith('png'))) {
                data.append("image", uploadedFile)
                if (textRegEx.test(uploadProjectForm[1].value)) {
                    data.append("title", uploadProjectForm[1].value)
                    if (uploadProjectForm[2].value !== "") {
                        data.append("category", uploadProjectForm[2].value)
                        sendDataToAPI('http://localhost:5678/api/works', data)
                            .then(r => {
                                //Note du 31/01/26 à 16h15 : factoriser tout ça en priorité (sûrement via les fonctions displayWorks etc.)
                                //Append project to portfolio gallery
                                let figure = gallery.appendChild(document.createElement("figure"))
                                figure.dataset.id = r.id
                                figure.dataset.name = r.title
                                figure.dataset.categoryId = r.categoryId
                                let figureImg = figure.appendChild(document.createElement("img"))
                                figureImg.setAttribute("src", r.imageUrl)
                                figureImg.setAttribute("alt", r.title)
                                let figureCaption = figure.appendChild(document.createElement("figcaption"))
                                figureCaption.innerText = r.title

                                //Append project to modal-window gallery
                                let modalFigure = grid.appendChild(document.createElement("figure"))
                                modalFigure.dataset.id = r.id
                                modalFigure.dataset.name = r.title
                                modalFigure.dataset.categoryId = r.categoryId

                                let projectModalContent = modalFigure.appendChild(document.createElement("div"))
                                projectModalContent.setAttribute("class", "project-grid-modal-image")

                                let modalFigureImg = projectModalContent.appendChild(document.createElement("img"))
                                modalFigureImg.setAttribute("src", r.imageUrl)
                                modalFigureImg.setAttribute("alt", r.title)

                                let deleteProjectButton = projectModalContent.appendChild(document.createElement("button"))
                                deleteProjectButton.setAttribute("class", "delete-project-button")
                                deleteProjectButton.dataset.projectId = r.id
                                deleteProjectButton.innerHTML = '<i class="fa-solid fa-trash-can fa-sm"></i>'
                                let deleteProjectButtons = document.querySelectorAll('.delete-project-button')
                                deleteProject(deleteProjectButtons)
                                modalWindows[1].close()
                                modalWindows[0].showModal()
                            })

                    } else {
                        flashError('uploadCategoryError', uploadProjectForm)
                        throw new Error('Merci de sélectionner une catégorie')
                    }
                } else {
                    flashError('uploadTitleError', uploadProjectForm)
                    throw new Error("Merci d'écrire un titre complet")
                }
            } else {
                flashError('uploadFileError', uploadProjectForm)
                throw new Error('Merci de fournir une image au formulaire')
            }

        } catch (error) {
            console.error(error)
        }

    })

    //Event listener to logout the logged-in user.
    authLink.addEventListener("click", (e) => {
        logout(e, editModBanner, editFormLinkContent, buttonDisplayAllProjects)
    }, { once: true })

}


