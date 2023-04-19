function renderProductosCarrito() {
    const productos = cargarProductosCarrito(); //? productos
    let salida = "";

    if (totalProductosCarrito() > 0) {
        salida += `<table class="table">
        <tr>
        <td colspan="5" class="text-end"><button class="btn btn-secondary" onclick="vaciarCarrito()">Vaciar Carrito</button></td>
        <tr>`;

        for (producto of productos) {
            salida += `<tr>
            <td><img src="${"images/" + producto.imagen}" alt="${producto.nombre}" width="80" /></td>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad} X $${producto.precio}</td>
            <td>$${producto.cantidad * producto.precio}</td>
            <td class="text-end"><button class="btn btn-secondary" onclick="eliminarProducto(${producto.id});" title="Eliminar Producto"><img src="images/trash.svg" alt="Eliminar Producto" width="16" /></button></td>
            </tr>`;
        }

        salida += `<tr>
        <td colspan="3">Total a Pagar</td>
        <td>$${totalPagarCarrito()}</td>
        <td>&nbsp;</td>
        </tr>`;
        salida += `</table>`;
    } else {
        salida = quitarProductos()
    }

    document.getElementById("productos").innerHTML = salida;
}

function quitarProductos () {
    Swal.fire({
        icon: 'error',
        title: 'Carrito vacio',
        text: 'Usted quitó todos los productos del carrito',
        footer: '<a href="/index.html">Desea volver a comprar?</a>'
    })
}


renderProductosCarrito();
renderBotonCarrito();