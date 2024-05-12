import retriveContent from "./datamanager.js";
import displayGallery from "./gallery.js";
async function displayResearch (){
const data = await retriveContent("http://localhost:5678/api/categories")
    console.log(data)
    const research = document.querySelector(".research")
    research.innerHTML = `<button data-categoryid="0">Tous</button>`
    data.forEach(element => {
      research.innerHTML += `<button data-categoryid="${element.id}">${element.name}</button>`
      })
      const btns = document.querySelectorAll(".research button")
      const arrayBtns = Array.from(btns)
      arrayBtns.forEach(btn => {
        btn.addEventListener("click", e =>{
          const categoryId = e.target.dataset.categoryid
          displayGallery(parseInt(categoryId))
        })
      })
}
export default displayResearch