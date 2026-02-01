/**
 * Upload a project using a form divided in three inputs : 
 * a file input (for the project's picture), a text input (for project's title) and a select field (for the project's category).
 * @param {SubmitEvent} e 
 * @param {HTMLInputElement} inputTypeFile 
 * @param {HTMLFormElement} uploadForm 
 * @param {HTMLDialogElement[]} modalWindowsArray 
 */
function uploadProject(e, inputTypeFile, uploadForm, modalWindowsArray) {

    try {

        e.preventDefault()
        const textRegEx = new RegExp("[a-zéàâçèêô0-9-(): ]{4,}", "gmi")
        const data = new FormData()
        const uploadedFile = inputTypeFile.files[0]
        const titleField = uploadForm[1]
        const selectField = uploadForm[2]
        const canUploadPictureFile = inputTypeFile.value !== "" && uploadedFile.size < 4194304 && (uploadedFile.name.endsWith('jpg') || uploadedFile.name.endsWith('png'))
        const titleIsComplete = textRegEx.test(titleField.value)
        const fieldIsntEmpty = selectField.value !== ""

        if (canUploadPictureFile) {
            data.append("image", uploadedFile)
            if (titleIsComplete) {
                data.append("title", titleField.value)
                if (fieldIsntEmpty) {
                    data.append("category", selectField.value)
                    sendDataToAPI('http://localhost:5678/api/works', data)
                        .then(r => {
                            appendNewWorkToDOM(gallery, grid, r)
                            let deleteProjectButtons = document.querySelectorAll('.delete-project-button')
                            deleteProject(deleteProjectButtons)
                            modalWindowsArray[1].close()
                            modalWindowsArray[0].showModal()
                        })

                } else {
                    flashError('uploadCategoryError', uploadForm)
                    throw new Error('Merci de sélectionner une catégorie')
                }
            } else {
                flashError('uploadTitleError', uploadForm)
                throw new Error("Merci d'écrire un titre complet")
            }
        } else {
            flashError('uploadFileError', uploadForm)
            throw new Error('Merci de fournir une image au formulaire')
        }

    } catch (error) {
        console.error(error)
    }

}