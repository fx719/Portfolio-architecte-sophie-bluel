import { displayCategoriesButtons } from "./actions/displayCategoriesButtons.js"
import { displayPictures } from "./actions/displayPictures.js"
import { getDataFromAPI } from "./lib/fetchDataFromAPI.js"


const gallery = document.querySelector('.gallery')
const categoriesButtons = document.querySelector('.categories-buttons')



const works = await getDataFromAPI("http://127.0.0.1:5678/api/works")
const categories = await getDataFromAPI("http://127.0.0.1:5678/api/categories")

displayPictures(gallery, works)
displayCategoriesButtons(categoriesButtons, categories)

