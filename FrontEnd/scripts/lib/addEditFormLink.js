function addEditFormLink(elementBeforeTheLink) {
    const editFormLinkContent = document.createElement("div")
    editFormLinkContent.setAttribute("class", "edit-form-link-content")
    editFormLinkContent.innerHTML = '<i class="fa-regular fa-pen-to-square fa-fw"></i> <a href="#" id="editFormLink">modifier</a>'
    elementBeforeTheLink.insertAdjacentElement("afterend", editFormLinkContent)
}