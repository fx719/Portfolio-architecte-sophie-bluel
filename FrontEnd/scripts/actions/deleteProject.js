/**
 * Removes a project from the API database, the homepage and the modal-window gallery.
 * Correctly targets the project-id from the dynamically generated delete buttons, which get their data-project-id attribute from the API.
 * @param {HTMLAllCollection} buttonsCollection 
 */
function deleteProject(buttonsCollection) {
    buttonsCollection.forEach(deleteProjectButton => {
        deleteProjectButton.addEventListener('click', (e) => {
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
                    console.log(r)
                    projectDOMElements.forEach(projectDOMElement => projectDOMElement.remove())
                })
                .catch(r => console.log(r))

        })
    })
}
