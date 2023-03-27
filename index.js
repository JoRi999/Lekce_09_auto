let car = document.querySelector("img")
car.src = "car.png"
let position = 0

document.addEventListener("keydown", (e) => {

    if (e.code === "ArrowRight") {
        
        position = position + 50

        car.style.marginLeft = position.toString() + "px"
    }

    if (e.code === "ArrowLeft"){
        
        position = 0

        car.style.marginLeft = "0px"
    }
   
})

