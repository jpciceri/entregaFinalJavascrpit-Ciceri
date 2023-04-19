function renderProductos() {
    const productos = cargarProductosLS(); //12 productos
    let salida = "";
    
    for (producto of productos) {
        salida += `<div class="col-md-3 my-3">
            <div class="card text-center border-0">
                <img src="${"images/" + producto.imagen}" alt="${producto.nombre}" class="card-img-top" />
                <div class="card-body">
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">$${producto.precio}</p>
                    <p><button class="btn btn-secondary" onclick="agregarAlCarrito(${producto.id});" title="Agregar Producto">Agregar (+)</button>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = salida;
}

renderProductos();
renderBotonCarrito();
