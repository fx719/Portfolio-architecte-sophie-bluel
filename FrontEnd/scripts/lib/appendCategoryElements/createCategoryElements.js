/**
 * Create an HTML element representing the project's categories fetched from THE API.
 * Needs to be used in a loop !
 * @param {string} elementToCreate : can be one of the following value : 'button' or 'option'.
 * @param {string} categoryData 
 * @returns {HTMLElement}
 */
function createCategoryElements(elementToCreate, categoryData) {


    if (elementToCreate === 'button') {
        let categoryButtonElement = document.createElement("button")
        categoryButtonElement.setAttribute('class', 'work-category-button')
        categoryButtonElement.dataset.categoryId = categoryData.id
        categoryButtonElement.dataset.name = categoryData.name
        categoryButtonElement.innerText = categoryData.name
        return categoryButtonElement

    } else if (elementToCreate === 'option') {
        let categoryOptionElement = document.createElement("option")
        categoryOptionElement.setAttribute('class', 'work-category-option')
        categoryOptionElement.dataset.categoryId = categoryData.id
        categoryOptionElement.setAttribute("value", categoryData.id)
        categoryOptionElement.innerText = categoryData.name
        return categoryOptionElement
    }

}