/**
 * Removes a project from the API database, the homepage and the modal-window gallery.
 * Correctly targets the project-id from the dynamically generated delete buttons, which get their data-project-id attribute from the API.
 * Because removing a project breaks the focusInModal() function, after every project deletion,  deleteProject() updates the focusableElements Array
 * to help the focusInModal() function.
 * @param {HTMLAllCollection} buttonsCollection 
 */
function deleteProject(buttonsCollection) {
    buttonsCollection.forEach(deleteProjectButton => {
        deleteProjectButton.addEventListener('click', (e) => {
            e.preventDefault()
            const deleteProjectModalWindow = deleteProjectButton.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

            let deleteButtonId = e.currentTarget.dataset.projectId
            let projectDOMElements = document.querySelectorAll(`[data-id="${deleteButtonId}"]`)

            const response = fetch(`http://127.0.0.1:5678/api/works/${deleteButtonId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                },

            })
            response
                .then(r => {
                    projectDOMElements.forEach(projectDOMElement => projectDOMElement.remove())
                    focusableElements = getFocusableElements(deleteProjectModalWindow)
                })
                .catch(r => console.error(r))

        })
    })
}
