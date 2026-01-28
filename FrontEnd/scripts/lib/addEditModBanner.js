/**
 * Adds a banner at the top of the homepage.
 * This banner informs the user he's using the edition mod.
 * @param {HTMLElement} elementAfterTheBanner 
 */
function addEditModBanner(elementAfterTheBanner) {
    const editModBanner = document.createElement("div")
    editModBanner.setAttribute("class", "edit-mod-banner")
    const editModBannerContent = document.createElement("div")
    editModBannerContent.setAttribute("class", "edit-mod-banner-content")
    editModBannerContent.innerHTML = '<i class="fa-regular fa-pen-to-square"></i><p>Mode édition</p>'
    elementAfterTheBanner.insertAdjacentElement("beforebegin", editModBanner)
    editModBanner.appendChild(editModBannerContent)
}