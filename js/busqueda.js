document.addEventListener("keyup",e => {


    if(e.target.matches("#buscador")){
        document.querySelectorAll(".card-juegos").forEach(juego => {
            juego.textContent.toLowerCase().includes(e.target.value.toLowerCase())
             ?juego.classList.remove("d-none")
             :juego.classList.add("d-none")
        })
    }
})


