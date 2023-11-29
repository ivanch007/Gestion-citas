function selecDepartamentoMedico(){
    let areaMedica = document.getElementById('areamedica')
    let eleccionArea = areaMedica.value
}

function selecProfesionales(){
    let profesionales = document.getElementById('selecprofesional')
    let eleccionProfesional = profesionales.value


}


let fecha = document.getElementById('selefecha')
let mostrarFecha = document.getElementById('spanFecha')
window.addEventListener('load', function(){
        
    
})

function mostrarMensaje() {
    let areaMedica = document.getElementById('areamedica').value;
    let profesional = document.getElementById('selecprofesional').value;
    let fecha = document.getElementById('selefecha').value;
    let mensaje = document.getElementById('mensaje');

    if (areaMedica === "Selecciona una opción" || profesional === "Selecciona al profesional" || fecha === "") {
        mensaje.innerText = "Por favor, completa todos los campos antes de seleccionar la cita.";
    } else {
        mensaje.innerText = `Tu cita médica con el área ${areaMedica} y el profesional ${profesional} en la fecha ${fecha} quedó asignada.`;
    }
}




