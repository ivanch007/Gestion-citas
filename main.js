
function loguear(){

    let user = document.getElementById('usuario').value
    let password = document.getElementById('contraseña').value

    if(user == 1234 && password == 1234){
        window.location = "./inicio/inicio.html" 
    }
    else{
        alert("Datos incorrectos")
    }

}