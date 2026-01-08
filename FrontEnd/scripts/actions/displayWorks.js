
/**
 * Appends pictures and their titles to an element, idealy a div (parentDiv), from an API reached with the getDataFromAPI function.
 * Throws an Error if the requested Data can't be found or if the parent Element can't be found in the DOM.
 * @param {Element} parentDiv 
 * @param {{id:number,title:string,imageUrl:string,categoryId:number,userId:number}[]} fetchedData 
 */
export const displayWorks = (parentDiv, fetchedData) => {
    try {
        const hasFoundData = fetchedData != null || fetchedData != undefined
        const hasFoundParentDiv = parentDiv != null || parentDiv != undefined
        if (hasFoundData) {
            if (hasFoundParentDiv) {
                for (let data of fetchedData) {
                    let figure = parentDiv.appendChild(document.createElement("figure"))
                    let figureImg = figure.appendChild(document.createElement("img"))
                    figureImg.setAttribute("src", data.imageUrl)
                    figureImg.setAttribute("alt", data.title)
                    let figureCaption = figure.appendChild(document.createElement("figcaption"))
                    figureCaption.innerText = data.title
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
 * Removes non-filtered pictures and appends new ones and their titles to an element, idealy a div (parentDiv), from an API reached with the getDataFromAPI function.
 * Throws an Error if the requested Data can't be found or if the parent Element can't be found in the DOM.
 * @param {Element} parentDiv 
 * @param {{id:number,title:string,imageUrl:string,categoryId:number,userId:number}[]} fetchedData 
 */
export const displayWorksByCategory = (parentDiv, fetchedData) => {
    try {
        const hasFoundData = fetchedData != null || fetchedData != undefined
        const hasFoundParentDiv = parentDiv != null || parentDiv != undefined
        if (hasFoundData) {
            if (hasFoundParentDiv) {
                while (parentDiv.firstChild) {
                    parentDiv.removeChild(parentDiv.firstChild)
                }
                for (let data of fetchedData) {
                    let figure = parentDiv.appendChild(document.createElement("figure"))
                    let figureImg = figure.appendChild(document.createElement("img"))
                    figureImg.setAttribute("src", data.imageUrl)
                    figureImg.setAttribute("alt", data.title)
                    let figureCaption = figure.appendChild(document.createElement("figcaption"))
                    figureCaption.innerText = data.title
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