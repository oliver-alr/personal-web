const image = document.querySelector(".home")

image.addEventListener("mouseover", ()=>{
  image.innerHTML = "<img src='images/cat.png' width='48' height='48' alt='cat'/>"
})

image.addEventListener("mousemove", ()=> {
  image.innerHTML = "<img src='images/emerald.png' width='48' height='48' alt='emerald_logo'/>"
})

document.querySelector("#mail").addEventListener("click", ()=> {
  alert("Envíame un email a: oliveralr18@gmail.com")
})
