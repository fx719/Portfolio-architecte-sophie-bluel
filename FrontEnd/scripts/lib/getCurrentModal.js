function getCurrentModal() {
    if (document.querySelector(".projects-modal").attributes.open) {
        currentModal = document.querySelector(".projects-modal")
        return currentModal
    }
}