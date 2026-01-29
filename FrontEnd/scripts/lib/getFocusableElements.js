/**
 * Searches all focusable Elements in a modal-window, and puts them in an array.
 * This array is used in the displayModal function to update the focusableElements Array's length, 
 * helping the displayModal and focusInModal functions to trap the focus in the modal-windows. 
 * @param {HTMLDialogElement} modal 
 * @returns {HTMLElement[]} 
 */
function getFocusableElements(modal) {
    const focusableSelector = "button, a , input[type='file'], input[type='text'],select"
    focusableElements = Array.from(modal.querySelectorAll(focusableSelector))
    return focusableElements
}