let lista = new Array;
function Producto(id, price, count) {
    this.id = id;
    this.price = price;
    this.count = count;

}


function addElement(id, price){
    let producto = new Producto(id, price, 1)
    const productoEncontrado = lista.find(producto => producto.id === id);
    console.log("consulat elementos");
    // Valida si se encontró el producto
     if(productoEncontrado !== undefined){
        lista.push(producto);
     }else{
        const indice = lista.findIndex(producto => producto.id === id);
        producto.count = producto.count + 1;
        lista[indice] = producto;
     }

    $("#numero").text(lista.length)

}



$.ajax({
    type: "GET",
    url: "http://localhost:8081/api/Producto",
    async: true,
    success: function (response){
        console.log(response)
        let product = response;
        let largo = length(product);
        for (let index = 0; index < largo; index++) {
            $("#contenedor").append(`
                <div>
                    <img src="${product[index].imagen}" alt="producto 1">
                    <div class="informacion">
                        <p>${product[index].nombre}</p>
                        <p class="precio"> $<span>${index}</span></p>
                        <button id="${product[index].idProducto}">Comprar</button>
                    </div>
                </div>
                `) 
            $('body').on('click', '#'+ product[index].idProducto,addElement(product[index].idProducto, index))
            
        }
    },error:function(error){
        console.log(error);
        console.log("Elementos agregados para no generar vacio en la pagina ")
        $("#contenedor").append(`                
            <div>
                <img src="Css/Images/tornillo1.jpg" alt="producto 1">
                <div class="informacion">
                    <p>primer producto</p>
                    <p class="precio"> $<span>10</span></p>
                    <button id="1">Comprar</button>
                </div>
            </div>
            <div>
                <img src="Css/Images/tornillos2.jpg" alt="producto 2">
                <div class="informacion">
                    <p>Tornillos para madera </p>
                    <p class="precio"> $2<span>.000</span></p>
                    <button id="2">Comprar</button>
                </div>
            </div>
            <div>
                <img src="Css/Images/tornillosconcubierta.jpg" alt="producto 3">
                <div class="informacion">
                    <p>Tornillos cubierta</p>
                    <p class="precio"> $3<span>.900</span></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div>
                <img src="Css/Images/tornillosdefijacion.jpg" alt="producto 4">
                <div class="informacion">
                    <p>Tornillos de fijacion</p>
                    <p class="precio"> $4<span>.990</span></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div>
                <img src="Css/Images/tornilloaltaresistencia.jpg" alt="producto 5">
                <div class="informacion">
                    <p>Tornillos resistencia</p>
                    <p class="precio"> $5<span>.990</span></p>
                    <button>Comprar</button>
                </div>
            </div>


            <div>
                <img src="Css/Images/paquete de tornillos.jpg" alt="producto 6">
                <div class="informacion">
                    <p>Paquete de tornillos </p>
                    <p class="precio"> $4<span>.990</span></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div>
                <img src="Css/Images/kit 4torillos automovil.jpg" alt="producto 7">
                <div class="informacion">
                    <p>Tornillos automovil</p>
                    <p class="precio"> $4<span>.990</span></p>
                    <button>Comprar</button>
                </div>
            </div>

            <div>
                <img src="Css/Images/Tornillosaltaresistenciahormigon.jpg" alt="producto 8">
                <div class="informacion">
                    <p>Tornillos hormigon</p>
                    <p class="precio"> $4<span>.990</span></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div>
                <img src="Css/Images/tornillo de hierro.jpg" alt="producto 9">
                <div class="informacion">
                    <p>Tornillo de hierro</p>
                    <p class="precio"> $4<span>.990</span></p>
                    <button>Comprar</button>
                </div>
            </div>
            `)
    }
})

$("#1").on('click', function(){ addElement(1, 50)});
$("#2").on('click', addElement(1, 50));