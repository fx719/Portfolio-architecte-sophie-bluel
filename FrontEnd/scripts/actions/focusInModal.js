function focusInModal(e, modal) {

    e.preventDefault()
    let index = focusableElements.findIndex(f => f === modal.querySelector(":focus"))
    console.log(index)
    if (e.shiftKey === true) {
        index--
        console.log(index)
    } else {
        index++
        console.log(index)
    }
    if (index >= focusableElements.length) {
        index = 0
        console.log(index)
    }
    if (index < 0) {
        index = focusableElements.length - 1
        console.log(index)
    }
    focusableElements[index].focus()
    console.log(index)

}