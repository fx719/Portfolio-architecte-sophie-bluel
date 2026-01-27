function getFocusableElements(modal) {
    const focusableSelector = "button, a , input :not([type='file']), input[type='text'],select"
    focusableElements = Array.from(modal.querySelectorAll(focusableSelector))
    return focusableElements
}