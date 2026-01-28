/**
 * Adds the edit form link next to the gallery title.
 * This links opens the first modal window, where the logged-in user will be able to delete projects.
 * @param {HTMLElement} elementBeforeTheLink 
 */
function addEditFormLink(elementBeforeTheLink) {
    const editFormLinkContent = document.createElement("div")
    editFormLinkContent.setAttribute("class", "edit-form-link-content")
    editFormLinkContent.innerHTML = '<i class="fa-regular fa-pen-to-square fa-fw"></i> <a href="#edit-projects-modal" class="open-modal-link" id="edit-form-link" >modifier</a>'
    elementBeforeTheLink.insertAdjacentElement("afterend", editFormLinkContent)
}