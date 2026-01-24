function getFocusableElements(modal) {
    const focusableSelector = "button, a , input :not([type='file']), texarea"
    focusableElements = Array.from(modal.querySelectorAll(focusableSelector))
    return focusableElements
}