const productos = [
    {id:1, nombre:"Zapatillas adidas Nizza Trek", descripcion:"x", precio:32900, imagen:"adidasNizzaTrek.jpg", categoria:"Mujer"},
    {id:2, nombre:"Zapatillas adidas Nizza Platform Mid", descripcion:"", precio:31599, imagen:"adidasNizzaPlatformMid.jpg", categoria:"Mujer"},
    {id:3, nombre:"Zapatillas Nike Air Max Terrascape 90", descripcion:"x", precio:61999, imagen:"nikeAirMaxTerrascape90.jpg", categoria:"Mujer"},
    {id:4, nombre:"Zapatillas Nike Air Max 90", descripcion:"x", precio:48999, imagen:"nikeAirMax90.jpg", categoria:"Hombre"},
    {id:5, nombre:"Zapatillas Urbanas adidas Superstar Hombre", descripcion:"", precio:48999, imagen:"adidasSuperstarHombre.jpg", categoria:"Hombre"},
    {id:6, nombre:"Zapatillas Air Jordan 1 Mid SE", descripcion:"x", precio:69999, imagen:"airJordanMidSe.jpg", categoria:"Hombre"},
    {id:7, nombre:"Zapatillas Nike Dunk Low Se para Niños", descripcion:"x", precio:41999, imagen:"nikeDunkLowSeNiños.jpg", categoria:"Niños"},
    {id:8, nombre:"Zapatillas Nike Force 1 Le", descripcion:"x", precio:31499, imagen:"nikeForceLe.jpg", categoria:"Hombre"},
    {id:9, nombre:"Zapatillas adidas Forum Low", descripcion:"x", precio:41799, imagen:"adidasForumLow.jpg", categoria:"Hombre"},
    {id:10, nombre:"Zapatillas Air Jordan Legacy 312 Low", descripcion:"x", precio:35210, imagen:"airJordanLegacyLow.jpg", categoria:"Hombre"},
    {id:11, nombre:"Zapatillas Puma Cali Dream", descripcion:"x", precio:35999, imagen:"pumaCaliDream.jpg", categoria:"Mujer"},
    {id:12, nombre:"Zapatillas adidas Niteball Ii", descripcion:"x", precio:41799, imagen:"adidasNiteball.jpg", categoria:"Hombre"}
];

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);