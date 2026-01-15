function closeModal(e) {
    if (modal === null) {
        return
    } else {
        e.preventDefault()
        modal.style.display = "none"
        modal.setAttribute("aria-hidden", "true")
        modal.removeAttribute("aria-modal")
        modal.removeEventListener("click", closeModal)
        modal = null
    }
}