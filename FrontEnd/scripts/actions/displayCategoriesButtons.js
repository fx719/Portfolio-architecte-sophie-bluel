// Note du 02/02/26 22h22 : factoriser la partie datasetting et innertexting dans une fonction, réutilisable dans displayCategoriesButtons et displayCategoriesOptions


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
                    let categoryButton = document.createElement("button")
                    categoryButton.setAttribute('class', 'work-category-button')
                    categoryButton.dataset.categoryId = data.id
                    categoryButton.dataset.name = data.name
                    categoryButton.innerText = data.name
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
                    let categoryOption = document.createElement("option")
                    categoryOption.setAttribute('class', 'work-category-option')
                    categoryOption.dataset.categoryId = data.id
                    categoryOption.setAttribute("value", data.id)
                    categoryOption.setAttribute("class", "category-option")
                    categoryOption.innerText = data.name
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