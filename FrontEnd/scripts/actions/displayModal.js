function displayModal(e, closeModalWindowButtons) {
    e.preventDefault()
    if (document.querySelector('.projects-modal').attributes.open) {
        let previousModal = document.querySelector('.projects-modal')
        previousModal.close()
    }
    const modalWindow = document.querySelector(e.target.getAttribute("href"))

    let i = 0

    modalWindow.setAttribute("autofocus", true)
    modalWindow.focus()

    modalWindow.showModal()
    modalWindow.children[0].focus()
    modalWindow.addEventListener('click', () => {
        modalWindow.close()
    })

    modalWindow.querySelector('.modal-stop-propagation').addEventListener('click', stopPropagation)
    focusableElements = getFocusableElements(modalWindow)
    console.log(focusableElements)

    closeModalWindowButtons.forEach(closeModalWindowButton => {

        i++
        closeModalWindowButton.setAttribute("id", `modal-window-${i}`)
        closeModalWindowButton.addEventListener('click', () => { modalWindow.close() })
    })

}