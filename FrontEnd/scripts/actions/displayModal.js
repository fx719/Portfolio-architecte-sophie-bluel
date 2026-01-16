function displayModal(e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute("href"))
    target.style.display = null
    target.removeAttribute("inert")
    target.setAttribute("aria-modal", "true")
    modal = target
    modal.addEventListener("click", closeModal)
    modal.querySelector(".close-modal-button").addEventListener("click", closeModal)
    modal.querySelector(".modal-stop-propagation").addEventListener("click", stopPropagation)
}