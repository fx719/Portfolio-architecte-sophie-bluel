/**
 * Append flash message to html Element if an error occurs.
 * @param {string} errorType : has to match the following values : 'authError', 'uploadFileError', 'uploadTitleError' or 'uploadCategoryError'.
 * @param {HTMLElement} errorElement 
 */


function flashError(errorType, errorElement) {

    try {

        const flashMessage = document.createElement("p")
        flashMessage.setAttribute("class", "flash-message-error")
        const errorMessages = {
            authError: "Erreur dans l’identifiant ou le mot de passe",
            uploadFileError: "Merci de fournir une image au formulaire",
            uploadTitleError: "Merci d'écrire un titre complet",
            uploadCategoryError: "Merci de sélectionner une catégorie"
        }

        if (errorType === "authError") {
            flashMessage.innerText = errorMessages.authError
        } else if (errorType === "uploadFileError") {
            flashMessage.innerText = errorMessages.uploadFileError
        } else if (errorType === "uploadTitleError") {
            flashMessage.innerText = errorMessages.uploadTitleError
        } else if (errorType === "uploadCategoryError") {
            flashMessage.innerText = errorMessages.uploadCategoryError
        } else {
            throw new Error("Merci de renseigner les erreurs sous forme de chaîne de caractères : 'authError', 'uploadFileError', 'uploadTitleError' ou 'uploadCategoryError'")
        }

        errorElement.appendChild(flashMessage)
        setTimeout(() => { flashMessage.remove() }, 2000)

    } catch (error) {
        console.error(error)
    }

}




