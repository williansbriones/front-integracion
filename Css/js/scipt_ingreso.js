$(document).ready(function(){
    function productoIngreso (idProducto, nombre, stock, descripcion, imagen){ 
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.stock = stock;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    
    let listaNueva = [
        new productoIngreso(1, "producto1", 100, "decription", "Css/Images/tornillo1.jpg"),
        new productoIngreso(2, "producto2", 200, "decription", "Css/Images/tornillos2.jpg"),
        new productoIngreso(3, "producto3", 200, "decription", "Css/Images/tornillosconcubierta.jpg",),
        new productoIngreso(4, "producto4", 200, "decription", "Css/Images/tornillosdefijacion.jpg"),
        new productoIngreso(5, "producto5", 200, "decription", "Css/Images/tornilloaltaresistencia.jpg"),
        new productoIngreso(6, "producto6", 200, "decription", "Css/Images/paquete de tornillos.jpg"),
        new productoIngreso(7, "producto7", 200, "decription", "Css/Images/kit 4torillos automovil.jpg"),
        new productoIngreso(8, "producto8", 200, "decription", "Css/Images/Tornillosaltaresistenciahormigon.jpg"),
        new productoIngreso(9, "producto9", 200, "decription", "Css/Images/tornillo de hierro.jpg")
    ];

    console.log(JSON.stringify(listaNueva[0]));
    enviarProductosAAPI(listaNueva);
});

// Función para enviar un producto utilizando AJAX y devolver una promesa
function enviarProducto(producto) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'http://localhost:8081/api/Producto', // Reemplaza con la URL de tu API
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(producto),
            success: function(response) {
                console.log('Producto enviado exitosamente:', response);
                resolve(response);
            },
            error: function(error) {
                console.error('Error al enviar el producto:', error);
                reject(error);
            }
        });
    });
}

// Función asíncrona para iterar sobre los productos y enviar cada uno de ellos
async function enviarProductosAAPI(listaProductos) {
    for (const producto of listaProductos) {
        try {
            await enviarProducto(producto);
        } catch (error) {
            console.error('Error en el envío de un producto:', error);
            // Puedes manejar el error aquí, por ejemplo, continuar con el siguiente producto o detener la ejecución
        }
    }
    console.log('Todos los productos han sido enviados.');
}