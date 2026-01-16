function focusInModal(e) {
    e.preventDefault()
    let index = focusableElements.findIndex(f => f === modal.querySelector(":focus"))
    console.log(focusableElements)
    if (e.shiftKey === true) {
        index--
        console.log(focusableElements)
    } else {
        index++
        console.log(focusableElements)
    }
    if (index >= focusableElements.length) {
        index = 0
        console.log(focusableElements)
    }
    if (index < 0) {
        index = focusableElements.length - 1
        console.log(focusableElements)
    }
    focusableElements[index].focus()
    console.log(focusableElements)

}