/**
 * Appends categorys'filters'buttons and their names to an element, idealy a div (parentDiv), from an API reached with the getDataFromAPI function.
 * Throws an Error if the requested Data can't be found or if the parent Element can't be found in the DOM.
 * @param {Element} parentDiv 
 * @param {{id:number,name:string}[]} fetchedCategory 
 */

const displayCategoriesButtons = (parentDiv, fetchedCategory) => {

    try {

        const hasFoundData = fetchedCategory != null || fetchedCategory != undefined
        const hasFoundparentDiv = parentDiv != null || parentDiv != undefined
        if (hasFoundData) {
            if (hasFoundparentDiv) {
                for (let data of fetchedCategory) {
                    let categoryButton = createCategoryElements('button', data)
                    parentDiv.appendChild(categoryButton)
                }
            } else {
                throw new Error('Element cant be found')
            }
        } else {
            throw new Error('Error when retrieving Data')
        }

    } catch (error) {
        console.error(error.message)
    }

}


/**
 * Appends categorys'options inside a select Element and their names to an element, idealy a div (parentDiv), from an API reached with the getDataFromAPI function.
 * Throws an Error if the requested Data can't be found or if the parent Element can't be found in the DOM.
 * @param {Element} parentSelect
 * @param {{id:number,name:string}[]} fetchedCategory 
 */

const displayCategoriesOptions = (parentSelect, fetchedCategory) => {

    try {
        const hasFoundData = fetchedCategory != null || fetchedCategory != undefined
        const hasFoundparentSelect = parentSelect != null || parentSelect != undefined
        if (hasFoundData) {
            if (hasFoundparentSelect) {
                for (let data of fetchedCategory) {
                    let categoryOption = createCategoryElements('option', data)
                    parentSelect.appendChild(categoryOption)
                }
            } else {
                throw new Error('Select Element cant be found')
            }
        } else {
            throw new Error('Error when retrieving Data')
        }

    } catch (error) {
        console.error(error.message)
    }

}