/**
 * This function has to be used inside a callback function of an event listener.
 * Dynamically sets the homepage of a logged user back to the non-logged user interface, and deletes the session storage data.
 * @param {Event} e 
 * @param {HTMLElement} editModBanner 
 * @param {HTMLElement} editFormLinkContent 
 * @param {HTMLElement} buttonDisplayAllProjects 
 */
function logout(e, editModBanner, editFormLinkContent, buttonDisplayAllProjects) {
    e.preventDefault()
    sessionStorage.clear()
    editModBanner.setAttribute("style", "display:none;")
    editFormLinkContent.setAttribute("style", "display:none;")
    categoriesButtonsDiv.removeAttribute("style")
    buttonDisplayAllProjects.focus()
    authLink.setAttribute("href", "./pages/login.html")
    authLink.innerText = "login"
}