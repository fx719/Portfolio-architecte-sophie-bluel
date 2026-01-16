function closeModal(e) {
    if (modal === null) {
        return
    } else {
        e.preventDefault()
        modal.style.display = "none"
        modal.setAttribute("aria-hidden", "true")
        modal.removeAttribute("aria-modal")
        modal.removeEventListener("click", closeModal)
        modal.querySelector(".close-modal-button").addEventListener("click", closeModal)
        modal.querySelector(".modal-stop-propagation").removeEventListener("click", stopPropagation)
        modal = null
    }
}