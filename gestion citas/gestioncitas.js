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