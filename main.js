
function loguear(){

    let user = document.getElementById('usuario').value
    let password = document.getElementById('contraseña').value

    if(user == 12345 && password == 7894){
        window.location = "./inicio/inicio.html" 
    }
    else{
        alert("Datos incorrectos")
    }

}