function addEditFormLink(elementBeforeTheLink) {
    const editFormLinkContent = document.createElement("div")
    editFormLinkContent.setAttribute("class", "edit-form-link-content")
    editFormLinkContent.innerHTML = '<i class="fa-regular fa-pen-to-square fa-fw"></i> <a href="#edit-projects-modal" id="edit-form-link" >modifier</a>'
    elementBeforeTheLink.insertAdjacentElement("afterend", editFormLinkContent)
}