/**
 * Appends a figure element, using fetched data from the API.
 * Can be used in a loop.
 * @param {HTMLDivElement} element 
 * @param {string} data 
 * @returns {HTMLElement}
 */
function appendProjectFigure(element, data) {
    let figure = element.appendChild(document.createElement("figure"))
    figure.dataset.id = data.id
    figure.dataset.name = data.title
    figure.dataset.categoryId = data.categoryId
    return figure
}