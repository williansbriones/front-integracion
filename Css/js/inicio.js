$(document).ready(function(){

})

function loginVariable(email, password){
    this.email = email
    this.password = password
}
$('#iniciosesion').on('click', function() {
     event.preventDefault(); 
    console.log("inicio de sesion")
    let gmail = $('#email').val();
    let password = $('#password').val();
    console.log(gmail)
    console.log(password)
    inicioSecion(gmail, password);
});


function login(gmail, password){

    let credenciales = new loginVariable(gmail, password);

    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'http://localhost:8080/user/login', // Reemplaza con la URL de tu API
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(credenciales),
            success: function(response) {
                console.log(response)
                localStorage.setItem("user", JSON.stringify(response))
                resolve(response);
            },
            error: function(error) {
                console.error('inicio se sesion fallido:', error);
                reject(error);
            }
        });
    });
}


async function inicioSecion(gmail, password) {
        try {
            await login(gmail, password);
        } catch (error) {
            console.error(error);
            // Puedes manejar el error aquí, por ejemplo, continuar con el siguiente producto o detener la ejecución
        }
}