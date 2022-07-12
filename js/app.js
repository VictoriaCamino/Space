const contenedorJuegos = document.querySelector('#cardProductos')
const cantidadJuegos = document.querySelector('.number-cart')
const total = document.querySelector('#precio-total')
const contenedorCarrito = document.querySelector('#cartContainer')
const botonComprar = document.querySelector('#btn-comprar')

        
 let juegos = []

// FETCH
fetch('../data/games.json')
.then((res) => res.json())
.then((jsonResponse) => {
    juegos = jsonResponse.data
    console.log(juegos)
    renderizarListaJuegos(juegos, contenedorJuegos)
})



// // juegos card
renderizarListaJuegos = (juegos, container) => {
    container.innerHTML = '';
    juegos.forEach((juego) => {
        const card = document.createElement('div')
        card.className = 'card-juegos col card   border-0 rounded mb-5 bg-dark card-size'
        card.innerHTML = `
        <img src="${juego.image}" class="card-img-top h-100 img-fluid" alt="">
        <div class=" d-flex align-items-end">
        <div class="card-body bg-dark border-bottom text-white d-flex justify-content-between p-1 opacity-100 rounded-1">
        <p class="card-text m-0">${juego.gameName}</p>
        <p class="card-text m-0">$${juego.price}</p>
        </div>
        </div>
        <button class="btn bg-secondary  btn-outline-dark btn-cart"  id='agregar${juego.id}' data-id='${juego.id}' onClick="listenerBotonCarrito()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart align-text-top " viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        
        </button>
        `
        container.append(card)
    })
    listenerBotonCarrito()
}






// filtros


// LIMPIAR LOS PRODUCTOS
const limpiarContenedor = (container) => container.innerHTML = " ";

const filtrarJuegos = (categories) => {
    limpiarContenedor(contenedorJuegos);
    juegos.forEach((juego) => {
        if (categories === juego.categories) {
            const card = document.createElement('div')
            card.className = 'card-juegos col card   border-0 rounded mb-5 bg-dark card-size'
            card.innerHTML = `
            <img src="${juego.image}" class="card-img-top h-100 img-fluid" alt="">
            <div class=" d-flex align-items-end">
            <div class="card-body bg-dark border-bottom text-white d-flex justify-content-between p-1 opacity-100 rounded-1">
            <p class="card-text m-0">${juego.gameName}</p>
            <p class="card-text m-0">$${juego.price}</p>
            </div>
            </div>
            <button  class="btn bg-secondary  btn-outline-dark btn-cart"  id='agregar${juego.id}'  onClick=" listenerBotonCarrito()">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart align-text-top " viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            
        </button>
        
        `
        contenedorJuegos.append(card)
    }
})
listenerBotonCarrito()
};






//   carrito
let carrito = [];


// juegos card
const renderizarCarrito = () => {
    contenedorCarrito.innerHTML = ''
    carrito.forEach((juegos) => {
        const cartRow = document.createElement('div')
        cartRow.className = 'card mb-3 card-cart'
        cartRow.innerHTML = `
        <div class="row g-0 d-flex justify-content-between align-items-center">
        <div class="col-3 ">
        <img src="${juegos.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-4">
        <p class="card-text m-0">${juegos.gameName}</p>
        </div>
        <div class="col-2">
             <p class="card-text "><small class="text-muted">$${juegos.price}</small></p>
       </div>
           <div class="col-2">
               <img class="borrarJuego"  data-id="${juegos.id}" onclick="eliminarDelCarrito()" src="../svg/trash.svg" alt="">
         </div>
   </div>
        `
        contenedorCarrito.append(cartRow)
    })

    // BOTON DE C/CARD PARA ELIMINAR JUEGO DEL CARRITO
     document.querySelectorAll('.borrarJuego').forEach((borrar) => {
         borrar.addEventListener('click', eliminarJuegoDelCarrito)
     })



     cantidadJuegos.innerHTML = carrito.length


     total.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)

    //alerta boton compra
    document.querySelector('#btn-comprar').addEventListener('click', () => {
        Swal.fire(
            'Compra finalizada',
            'Gracias por tu compra!',
            'success'

        )
    })
     
        
}


// / ELIMINAR JUEGO DEL CARRITO
const eliminarJuegoDelCarrito = (e) => {
    const juegoIdSelected = e.target.closest('.borrarJuego').getAttribute('data-id')
    carrito = carrito.filter((juego) => juego.id != juegoIdSelected)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    

    renderizarCarrito()
}


const agregarJuegoAlCarrito = (e) => {
   
    const juegoIdSelected = e.target.getAttribute('data-id')
    const videojuegoSelected = juegos.find((juego) => juego.id == juegoIdSelected)
    console.log(videojuegoSelected)

    const juegoParaAgregar = {
        ...videojuegoSelected,
        cantidad: 1
    }

    const juegoYaSeleccionado = carrito.find((juego) => juego.id == juegoParaAgregar.id)

    if (!juegoYaSeleccionado) {
        carrito.push(juegoParaAgregar)
        
        Toastify({
            text: `${videojuegoSelected.gameName} agregado al carrito`,
            duration: 3000,
            destination: "../pages/carrito.html",
            newWindow: false,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #14213D,#004D6F,#007C8E)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          
    } else {
        juegoYaSeleccionado.cantidad++
    }
    
    renderizarCarrito()
    localStorage.setItem('carrito', JSON.stringify(carrito)) 
}

// // boton de la tarjeta de juegos para agregar al carrito
const listenerBotonCarrito = () => {
    const botonesCompra = document.querySelectorAll('.btn')
    botonesCompra.forEach((botonCompra) => {
        botonCompra.addEventListener('click', agregarJuegoAlCarrito)
    })
}