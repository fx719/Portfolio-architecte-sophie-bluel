/**
 * Traps the focus in the modal-windows, preventing the keyboard navigation to 
 * put the focus outside of the modal-windows.
 * @param {Event} e 
 * @param {HTMLDialogElement} modal 
 */
function focusInModal(e, modal) {

    e.preventDefault()
    let index = focusableElements.findIndex(f => f === modal.querySelector(":focus"))
    if (e.shiftKey === true) {
        index--
    } else {
        index++
    }
    if (index >= focusableElements.length) {
        index = 0
    }
    if (index < 0) {
        index = focusableElements.length - 1
    }
    focusableElements[index].focus()

}