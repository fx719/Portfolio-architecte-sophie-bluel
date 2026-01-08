/**
 * Appends categorys'filters'buttons and their names to an element, idealy a div (parentDiv), from an API reached with the getDataFromAPI function.
 * Throws an Error if the requested Data can't be found or if the parent Element can't be found in the DOM.
 * @param {Element} parentDiv 
 * @param {{id:number,title:string,imageUrl:string,categoryId:number,userId:number}[]} fetchedData 
 */

export const displayCategoriesButtons = (parentDiv, fetchedData) => {

    try {

        const hasFoundData = fetchedData != null || fetchedData != undefined
        const hasFoundparentDiv = parentDiv != null || parentDiv != undefined
        if (hasFoundData) {
            if (hasFoundparentDiv) {
                for (let data of fetchedData) {
                    let categoryButton = document.createElement("button")
                    categoryButton.setAttribute('class', 'work-category-button')
                    categoryButton.setAttribute('id', data.id)
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