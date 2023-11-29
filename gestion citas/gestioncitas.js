function selecDepartamentoMedico(){
    let areaMedica = document.getElementById('areamedica')
    let eleccionArea = areaMedica.value

    document.getElementById('selecDepartamento').innerText = `Ha seleccionado el área ${eleccionArea}. `
}

function selecProfesionales(){
    let profesionales = document.getElementById('selecprofesional')
    let eleccionProfesional = profesionales.value

    document.getElementById('selecPro').innerText = `El profesionales seleccionado es ${eleccionProfesional}`

}


    let fecha = document.getElementById('selefecha')
    let mostrarFecha = document.getElementById('spanFecha')
    window.addEventListener('load', function(){
        
        fecha.addEventListener('change', function(){
            mostrarFecha.innerText = `Le fecha seleccionada es ${this.value}`
        })
    })



//this.value.document.getElementById('spanFecha').innerText = `Le fecha seleccionada es ${fecha}`