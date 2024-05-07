import retriveContent from "./datamanager.js";
// async function displayGallery (){
// const data = await retriveContent("http://localhost:5678/api/works")
//     console.log(data)
//     const gallery = document.querySelector(".gallery")
//     data.forEach(element => {
//       gallery.innerHTML += `<figure>
//       <img src="${element.imageUrl}" alt="${element.title}">
//       <figcaption>${element.title}</figcaption>
//     </figure>`
//       })
// }

async function displayGallery (category=0){
  const data = await retriveContent("http://localhost:5678/api/works")
      console.log(data)
      const gallery = document.querySelector(".gallery")
      gallery.innerHTML = ""
      data.forEach(element => {
        if (category === 0 || element.categoryId === category)
        gallery.innerHTML += `<figure>
        <img src="${element.imageUrl}" alt="${element.title}">
        <figcaption>${element.title}</figcaption>
      </figure>`
        })
  }
export default displayGallery