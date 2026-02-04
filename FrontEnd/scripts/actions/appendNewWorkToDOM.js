/**
 * Appends just-uploaded project to both homepage and modal-window galleries.
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
        let figure = appendProjectFigure(portfolioParentDiv, justCreatedData)
        let figureImg = appendProjectImg(figure, justCreatedData)
        let figureCaption = figure.appendChild(document.createElement("figcaption"))
        figureCaption.innerText = justCreatedData.title

        //Append project to modal-window gallery
        let modalFigure = appendProjectFigure(modalGalleryDiv, justCreatedData)

        let projectModalContent = modalFigure.appendChild(document.createElement("div"))
        projectModalContent.setAttribute("class", "project-grid-modal-image")

        let modalFigureImg = appendProjectImg(projectModalContent, justCreatedData)

        let deleteProjectButton = appendDeleteButtons(projectModalContent, justCreatedData)

    } catch (error) {
        console.error(error)
    }


}