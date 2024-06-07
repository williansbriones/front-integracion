$(document).ready(function () {
   
    let lista = JSON.parse(localStorage.getItem("carro"))

    lista.forEach(Producto => {
        $(".informacioncompra").append(`
            <div class="productoscompra" id="productoscompra">${getNombre(Producto.id)}</div>
            <div class="total" id="total">${Producto.price * Producto.count}</div>
            `)
    });
});


function getNombre(id){

    $.ajax({
        url: 'http://localhost:8081/api/Producto/'+id, // Reemplaza con la URL de tu API
        type: 'GET',
        success: function() {
            console.log(response)
            localStorage.setItem("user", JSON.stringify(response))
            resolve(response);
        },
        error: function(error) {
            console.error('inicio se sesion fallido:', error);
            reject(error);
        }
    });
}