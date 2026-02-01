/**
 * Preview the picture of the project being uploaded by the user.
 * @param {Event} e ('change') 
 * @param {HTMLInputElement} inputTypeFile 
 * @param {string} srcImgUrl 
 * @param {HTMLImageElement} picturePreview 
 * @param {HTMLDivElement} parentFileInputDiv 
 */
function previewUploadedPicture(e, inputTypeFile, srcImgUrl, picturePreview, parentFileInputDiv) {

    try {
        //Select the file from the input type="file"
        const uploadedFile = inputTypeFile.files[0]
        const reader = new FileReader()

        //If the selection is cancelled, display the basic uploading-file interface.
        if (e.target.value === "") {
            picturePreview.src = srcImgUrl
            picturePreview.removeAttribute("style")
            parentFileInputDiv.removeAttribute("style")
            for (let i = 1; i < inputTypeFile.labels.length; i++) {

                inputTypeFile.labels[i].removeAttribute("style")

            }

        }

        //If the selection is cancelled, do not use the fileReader (to avoid a typeError)
        if (uploadedFile === undefined) {

        } else {
            //If a picture is selected, use the data obtained from the fileReader Object to source and preview it. 
            //The picture should take the whole height of the input div background, and =~ one third of the width.
            reader.readAsDataURL(uploadedFile)
            reader.addEventListener('loadend', () => {
                picturePreview.src = reader.result
                picturePreview.setAttribute("style", "width : 100%; height: 149px; max-width: 100%;")

                for (let i = 1; i < inputTypeFile.labels.length; i++) {

                    inputTypeFile.labels[i].setAttribute("style", "display: none;")

                }
                parentFileInputDiv.setAttribute("style", "padding-top: 0; padding-bottom: 0; gap: 0;")
            })
        }
    } catch (error) {
        console.error(error)
    }


}