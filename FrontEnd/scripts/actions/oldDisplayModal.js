function displayModal(e) {
    e.preventDefault()
    modal = document.querySelector(e.target.getAttribute("href"))
    focusableElements = Array.from(modal.querySelectorAll(focusableSelector))
    previouslyFocusedElement = document.querySelector(":focus")
    modal.style.display = null
    focusableElements[0].focus()
    modal.removeAttribute("aria-hidden")
    modal.setAttribute("aria-modal", "true")
    modal.addEventListener("click", closeModal)
    modal.querySelector(".close-modal-button").addEventListener("click", closeModal)
    modal.querySelector(".modal-stop-propagation").addEventListener("click", stopPropagation)
}