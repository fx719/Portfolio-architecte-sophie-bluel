/**
 * Change the form's submission button's color depending on the form's fields' completion.
 * @param {NodeListOf<Element>} formWithoutSubmitButton 
 * @param {HTMLButtonElement} submitButton 
 * @param {string} completeFormColorValue : can be hexadecimal or the simple name ('gray, 'red' etc.)
 * @param {string} incompleteFormColorValue : can be hexadecimal or the simple name ('gray, 'red' etc.)
 */
function colorButtonIfFormIsComplete(formWithoutSubmitButton, submitButton, completeFormColorValue, incompleteFormColorValue) {
    try {

        if (formWithoutSubmitButton) {

            const numberOfFields = formWithoutSubmitButton.length
            formWithoutSubmitButton.forEach(formElement => {

                formElement.addEventListener('input', () => {
                    let filledForm = Array.from(formWithoutSubmitButton).filter(formElement => formElement.value !== "")

                    //If all fields have value, then they're all complete, and so is their form.
                    if (filledForm.length === numberOfFields) {
                        submitButton.setAttribute("style", `background-color: ${completeFormColorValue};`)
                    }

                    //If not, then the form is incomplete.
                    if (filledForm.length < numberOfFields) {
                        submitButton.setAttribute("style", `background-color: ${incompleteFormColorValue};`)
                    }
                })

            })

        } else {
            throw new Error('Formulaire introuvable')
        }

    } catch (error) {
        console.error(error)
    }
}