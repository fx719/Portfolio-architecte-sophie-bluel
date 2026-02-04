/**
 * Appends a button element to one or more project img in the modal-window's gallery, using fetched data from the API.
 * Can be used in a loop.
 * @param {HTMLElement} element 
 * @param {string} data 
 * @returns {HTMLButtonElement}
 */
function appendDeleteButtons(element, data) {
    let trashCanDeleteButton = element.appendChild(document.createElement("button"))
    trashCanDeleteButton.setAttribute("class", "delete-project-button")
    trashCanDeleteButton.dataset.projectId = data.id
    trashCanDeleteButton.innerHTML = '<i class="fa-solid fa-trash-can fa-sm"></i>'
    return trashCanDeleteButton
}