function closeModal(e) {

    e.preventDefault()
    let modalWindow = document.querySelector(e.target.getAttribute("href"))

    modalWindow.setAttribute("aria-hidden", "true")
    modalWindow.removeAttribute("aria-modal")
    modalWindow.removeEventListener("click", closeModal)
    modalWindow.querySelector(".close-modal-button").addEventListener("click", closeModal)
    modalWindow.querySelector(".modal-stop-propagation").removeEventListener("click", stopPropagation)
    //modalWindow = null

}