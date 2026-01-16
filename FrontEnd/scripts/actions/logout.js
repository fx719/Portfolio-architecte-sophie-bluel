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