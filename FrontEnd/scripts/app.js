import { displayCategoriesButtons } from "./actions/displayCategoriesButtons.js"
import { displayWorks, displayWorksByCategory } from "./actions/displayWorks.js"
import { getDataFromAPI } from "./lib/fetchDataFromAPI.js"


const gallery = document.querySelector('.gallery')
const categoriesButtonsDiv = document.querySelector('.categories-buttons')



const works = await getDataFromAPI("http://127.0.0.1:5678/api/works")
const categories = await getDataFromAPI("http://127.0.0.1:5678/api/categories")





displayCategoriesButtons(categoriesButtonsDiv, categories)
displayWorks(gallery, works)


const workCategoryButtons = document.querySelectorAll('.work-category-button')


for (let workCategoryButton of workCategoryButtons) {

    workCategoryButton.addEventListener('click', (e) => {
        let buttonId = parseInt(e.target.id)
        if (buttonId === 0) {
            while (gallery.firstChild) {
                gallery.removeChild(gallery.firstChild)
            }
            displayWorks(gallery, works)
        } else {
            let worksByCategory = works.filter((work) => work.categoryId === buttonId)
            displayWorksByCategory(gallery, worksByCategory)
        }
    })

}
