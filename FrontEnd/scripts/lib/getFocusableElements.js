function getFocusableElements(modal) {
    const focusableSelector = "button, a , input, texarea"
    focusableElements = Array.from(modal.querySelectorAll(focusableSelector))
    return focusableElements
}