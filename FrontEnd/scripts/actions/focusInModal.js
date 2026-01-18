function focusInModal(e) {

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