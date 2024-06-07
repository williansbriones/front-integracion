$(document).ready(function () {
   
    let lista = JSON.parse(localStorage.getItem("carro"))
    console.log(lista)
    lista.forEach(async Producto => {
        let precio = Producto.price.replace("$", "")
        let pro = await getNombreasync(Producto.id)
        $(".informacioncompra").append(`
            <div>
            <div class="productoscompra" id="productoscompra">${pro.nombre}</div>
            <div class="total" id="total">$ ${precio* Producto.count}</div>
            </div>
            `)
    });
});


function invoice(DateShopping, products, idUser,total){
    this.DateShopping = DateShopping
    this.products = products
    this.idUser = idUser,
    this.total = total
}

$('#comprar').on('click', function() {
    let listacondolar = JSON.parse(localStorage.getItem("carro"))
    let lista = quitarSimboloDolar(listacondolar)
    console.log(lista)
    let user = JSON.parse(localStorage.getItem("user"))
    let total = calcularTotal(lista);
    console.log(total)
    let invo = new invoice(null, lista, 2, total)
    createinvoice(invo);
});

function quitarSimboloDolar(lista) {
    lista.forEach(producto => {
        producto.price = producto.price.replace("$", "");
    });
    return lista
}

function createinvoice(invoice){
    console.log(invoice);
    $.ajax({
        url: 'http://localhost:8080/invoice/create', // Reemplaza con la URL de tu API
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(invoice),
        success: function(response) {
            console.log(response)
            localStorage.removeItem("carro")
            window.open(response)
        },
        error: function(error) {
            console.error('inicio se sesion fallido:', error);
        }
    });
}


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
        console.log(elemento)
        return elemento
        
    } catch (error) {
        console.error(error);
        // Puedes manejar el error aquí, por ejemplo, continuar con el siguiente producto o detener la ejecución
    }
}


function calcularTotal(lista){
    let total = 0
    lista.forEach(element => {
        console.log(element.price)
        let priceNum = element.price.replace("$", "");
       total = total + (element.count * priceNum);
    });

    return total






}