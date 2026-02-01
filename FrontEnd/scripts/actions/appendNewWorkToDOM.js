/**
 * Append just-uploaded project to both homepage and modal-window galleries.
 * @param {HTMLElement} portfolioParentDiv 
 * @param {HTMLElement} modalGalleryDiv 
 * @param {Object} justCreatedData 
 */

function appendNewWorkToDOM(portfolioParentDiv, modalGalleryDiv, justCreatedData) {

    try {

        if (!portfolioParentDiv) {
            throw new Error("Impossible de trouver la div parente sur la page d'accueil")
        }
        if (!modalGalleryDiv) {
            throw new Error("Impossible de trouver la div parente sur la fenêtre modale")
        }
        if (!justCreatedData) {
            throw new Error("Erreur lors de la récupération des données nouvellement créees")
        }

        //Append project to portfolio gallery
        let figure = portfolioParentDiv.appendChild(document.createElement("figure"))
        figure.dataset.id = justCreatedData.id
        figure.dataset.name = justCreatedData.title
        figure.dataset.categoryId = justCreatedData.categoryId
        let figureImg = figure.appendChild(document.createElement("img"))
        figureImg.setAttribute("src", justCreatedData.imageUrl)
        figureImg.setAttribute("alt", justCreatedData.title)
        let figureCaption = figure.appendChild(document.createElement("figcaption"))
        figureCaption.innerText = justCreatedData.title

        //Append project to modal-window gallery
        let modalFigure = modalGalleryDiv.appendChild(document.createElement("figure"))
        modalFigure.dataset.id = justCreatedData.id
        modalFigure.dataset.name = justCreatedData.title
        modalFigure.dataset.categoryId = justCreatedData.categoryId

        let projectModalContent = modalFigure.appendChild(document.createElement("div"))
        projectModalContent.setAttribute("class", "project-grid-modal-image")

        let modalFigureImg = projectModalContent.appendChild(document.createElement("img"))
        modalFigureImg.setAttribute("src", justCreatedData.imageUrl)
        modalFigureImg.setAttribute("alt", justCreatedData.title)

        let deleteProjectButton = projectModalContent.appendChild(document.createElement("button"))
        deleteProjectButton.setAttribute("class", "delete-project-button")
        deleteProjectButton.dataset.projectId = justCreatedData.id
        deleteProjectButton.innerHTML = '<i class="fa-solid fa-trash-can fa-sm"></i>'

    } catch (error) {
        console.error(error)
    }


}