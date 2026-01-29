/**
 * Displays the modal-windows, which are used in this project to delete or add projects from / to the gallery.
 * If the first modal-window is already displayed ('open'), the second modal-window's display closes the first one.
 * @param {Event} e 
 * @param {HTMLCollection} closeModalWindowButtons 
 * @param {HTMLButtonElement} goBackButton 
 */
function displayModal(e, closeModalWindowButtons, goBackButton) {
    e.preventDefault()
    let modalWindow = document.querySelector(e.target.getAttribute("href"))
    if (document.querySelector('.projects-modal').attributes.open) {
        let previousModal = document.querySelector('.projects-modal')
        previousModal.close()

    }

    let modalWindowNumber = 0

    modalWindow.setAttribute("autofocus", true)
    modalWindow.focus()

    modalWindow.showModal()
    modalWindow.children[0].focus()
    modalWindow.addEventListener('click', () => {
        modalWindow.close()
    })

    modalWindow.querySelector('.modal-stop-propagation').addEventListener('click', stopPropagation)
    focusableElements = getFocusableElements(modalWindow)

    closeModalWindowButtons.forEach(closeModalWindowButton => {

        modalWindowNumber++
        closeModalWindowButton.setAttribute("id", `modal-window-${modalWindowNumber}`)
        closeModalWindowButton.addEventListener('click', () => {
            modalWindow.close()
        })
    })

    if (goBackButton) {
        goBackButton.addEventListener('click', (e) => {
            let wantedModalId = e.currentTarget.id.slice(10)
            let previousModal = document.getElementById(wantedModalId)
            modalWindow.close()
            previousModal.showModal()
            focusableElements = getFocusableElements(previousModal)
        })
    }

}