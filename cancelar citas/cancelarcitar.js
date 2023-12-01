function botonCancelar(){
    let citaSeleccionada = document.getElementById('citamedica').value
    let motivo = document.getElementById('motivocancelamiento').value
    let mensaje = document.getElementById('mensaje');

    if(citaSeleccionada === "Selecciona tu cita" || motivo === "selecciona el motivo"){
        mensaje.innerText = "Por favor selecciona todos los campos para cancelar la cita."
    }else{
        mensaje.innerText = `Tu cita médica con el profesional ${citaSeleccionada} ha sido cancelada por el siguiente motivo:  ${motivo}.`
    }
  
}