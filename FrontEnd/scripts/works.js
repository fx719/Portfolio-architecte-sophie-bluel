import { getDataFromAPI } from "./lib/fetchDataFromAPI.js"


const gallery = document.querySelector('.gallery')
const works = await getDataFromAPI("http://127.0.0.1:5678/api/works")


/**
 * Appends pictures and their titles to an element, idealy a div (parentDiv), from an API reached with the getDataFromAPI function.
 * Throws an Error if the requested Data can't be found or if the parent Element can't be found in the DOM.
 * @param {Element} parentDiv 
 * @param {{id:number,title:string,imageUrl:string,categoryId:number,userId:number}[]} fetchedData 
 */
const displayPictures = (parentDiv, fetchedData) => {
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


displayPictures(gallery, works)