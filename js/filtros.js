// -----------------FILTROS-------------------------------//
// limpiar contenedor de juegos
// const LimpiarContenedor = (container) => container.innerHTML = " ";

// // filtra los juegos por categoria
// const filtrarJuegos = (categories) => {
//     LimpiarContenedor(cardProductos);
//     juegos.forEach((juego) => {
//         if (categories === juego.categories) {
//             const card = document.createElement('div')
//             card.className = 'card-juegos col card   border-0 rounded mb-5 bg-dark card-size'
//             card.setAttribute('data-filter', juego.categories)
//             card.innerHTML = `
//             <img src="${juego.image}" class="card-img-top h-100 img-fluid" alt="">
//             <div class=" d-flex align-items-end">
//             <div class="card-body bg-dark border-bottom text-white d-flex justify-content-between p-1 opacity-100 rounded-1">
//             <p class="card-text m-0">${juego.gameName}</p>
//             <p class="card-text m-0">$${juego.price}</p>
//             </div>
//             </div>
//             <button  class="btn bg-secondary  btn-outline-dark btn-cart"  id='agregar${juego.id}'>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart align-text-top " viewBox="0 0 16 16">
//             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
//             </svg>
            
//             </button>
            
//             `
//             cardProductos.append(card)


//         }
//     })

    
    
// };

// -------------------------------------------------------------//