$(document).ready(function () {
   
    let lista = JSON.parse(localStorage.getItem("carro"))
    console.log(lista)
    lista.forEach(Producto => {
        let precio = Producto.price.replace("$", "")
        console.log(getNombreasync(Producto.id))
        $(".informacioncompra").append(`
            <div class="productoscompra" id="productoscompra">${"a"}</div>
            <div class="total" id="total">${precio* Producto.count}</div>
            `)
    });
});


function getNombre(id){
    return new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://localhost:8081/api/Producto/'+id, // Reemplaza con la URL de tu API
        type: 'GET',
        success: function(response) {
            resolve(response);
        },
        error: function(error) {
            console.error('inicio se sesion fallido:', error);
            reject(error);
        }
    });
}
)}

async function getNombreasync(id) {
    try {
        let elemento = await getNombre(id);
        return elemento
    } catch (error) {
        console.error(error);
        // Puedes manejar el error aquí, por ejemplo, continuar con el siguiente producto o detener la ejecución
    }
}