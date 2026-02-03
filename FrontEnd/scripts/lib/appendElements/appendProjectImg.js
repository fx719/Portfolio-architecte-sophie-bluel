/**
 * Append an img element, using fetched data from the API.
 * Can be used in a loop.
 * @param {HTMLElement} element 
 * @param {string} data 
 * @returns {HTMLImageElement}
 */
function appendProjectImg(element, data) {
    let projectImg = element.appendChild(document.createElement("img"))
    projectImg.setAttribute("src", data.imageUrl)
    projectImg.setAttribute("alt", data.title)
    return projectImg
}