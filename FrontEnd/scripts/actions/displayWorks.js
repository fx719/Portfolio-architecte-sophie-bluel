/**
 * Appends pictures and their titles to an element, idealy a div (parentDiv), from an API reached with the getDataFromAPI function.
 * Throws an Error if the requested Data can't be found or if the parent Element can't be found in the DOM.
 * @param {Element} parentDiv 
 * @param {{id:number,title:string,imageUrl:string,categoryId:number,userId:number}[]} fetchedData 
 */
const displayWorks = (parentDiv, fetchedData) => {
    try {
        const hasFoundData = fetchedData != null || fetchedData != undefined
        const hasFoundParentDiv = parentDiv != null || parentDiv != undefined
        if (hasFoundData) {
            if (hasFoundParentDiv) {
                for (let projectData of fetchedData) {
                    let figure = appendProjectFigure(parentDiv, projectData)
                    let figureImg = appendProjectImg(figure, projectData)
                    let figureCaption = figure.appendChild(document.createElement("figcaption"))
                    figureCaption.innerText = projectData.title
                }
            } else {
                throw new Error('Element cant be found')
            }
        } else {
            throw new Error('Error when retrieving Data')
        }

    } catch (error) {
        console.error(error.message)
    }
}


/**
 * Filters an array of  Element's (idealy a div) children, display them by adding a style=display:block; attribute.
 * Sets a display:none; to the children the user wants to hide.
 * If the user wants to see all the children of the Element, each of them gets a display:block attribute.
 * Throws an Error if the parent div Element can't be found.
 * @param {Element} parentDiv 
 * @param {number} filterCategoryId 
 */
const displayWorksByCategory = (parentDiv, filterCategoryId) => {

    try {
        const hasFoundParentDiv = parentDiv != null || parentDiv != undefined

        if (hasFoundParentDiv) {
            const parentDivChildren = Array.from(parentDiv.children)
            if (filterCategoryId === 0) {
                for (let parentDivChild of parentDivChildren) {
                    parentDivChild.setAttribute("style", "display:block;")
                }
            } else {
                let elementsToDisplay = parentDivChildren.filter(parentDivChild => parseInt(parentDivChild.dataset.categoryId) === filterCategoryId)
                for (let parentDivChild of parentDivChildren) {
                    parentDivChild.setAttribute("style", "display:none;")
                }
                for (let elementToDisplay of elementsToDisplay) {
                    elementToDisplay.setAttribute("style", "display:block;")
                }
            }
        } else {
            throw new Error('Element cant be found')
        }
    } catch (error) {
        console.error(error.message)
    }

}


/**
 * Appends pictures and their titles the projects grid displayed in the modal window,  from an API reached with the getDataFromAPI function.
 * Throws an Error if the requested Data can't be found or if the parent Element can't be found in the DOM.
 * @param {Element} parentDiv 
 * @param {{id:number,title:string,imageUrl:string,categoryId:number,userId:number}[]} fetchedData 
 */
const displayWorksInModalGallery = (parentDiv, fetchedData) => {
    try {
        const hasFoundData = fetchedData != null || fetchedData != undefined
        const hasFoundParentDiv = parentDiv != null || parentDiv != undefined
        if (hasFoundData) {
            if (hasFoundParentDiv) {
                for (let projectData of fetchedData) {
                    let figure = appendProjectFigure(parentDiv, projectData)

                    let projectModalContent = figure.appendChild(document.createElement("div"))
                    projectModalContent.setAttribute("class", "project-grid-modal-image")

                    let figureImg = appendProjectImg(projectModalContent, projectData)

                    let deleteProjectButton = projectModalContent.appendChild(document.createElement("button"))
                    deleteProjectButton.setAttribute("class", "delete-project-button")
                    deleteProjectButton.dataset.projectId = projectData.id
                    deleteProjectButton.innerHTML = '<i class="fa-solid fa-trash-can fa-sm"></i>'
                }
            } else {
                throw new Error('Element cant be found')
            }
        } else {
            throw new Error('Error when retrieving Data')
        }

    } catch (error) {
        console.error(error.message)
    }
}