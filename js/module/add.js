// Configuración del botón de guardar (btn btn-primary)
document.querySelector('.btn.btn-primary').addEventListener('click', async function () {
    const inpt = document.getElementsByClassName('form-control');
    const sex = document.getElementsByClassName('form-select')[0].value;

    const data = {
        NHistoria: inpt[0].value,
        Fecha: inpt[1].value,
        Nombre: inpt[2].value,
        Edad: inpt[3].value,
        Sexo: sex,
        Peso: inpt[4].value,
        Talla: inpt[5].value,
        IMC: inpt[6].value,
        SO2: inpt[7].value,
        SRespiratorio: inpt[8].value,
        SCardovascular: inpt[9].value,
        Abdomen: inpt[10].value,
        Extrmidades: inpt[11].value,
        SNervioso: inpt[12].value,
        DPresuntivo: inpt[13].value,
        DDiferencial: inpt[14].value,
        DDefinitivo: inpt[15].value,
        Laboratorios: inpt[16].value,
        Ecosonograma: inpt[17].value,
        Electrocardiograma: inpt[18].value,
        RX: inpt[19].value,
        EstudiosEspecializados: inpt[20].value,
        TratamientoIndicado: inpt[21].value,
        PConsulta: inpt[22].value,
        Observaciones: inpt[23].value,
    };

    //Add one line to the sheet
    await fetch("https://api.sheetbest.com/sheets/95fb32ec-c9d3-4048-aa9d-810c127f167b", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((r) => r.json())
        .then((data) => {
            // The response comes here
            SUCCESS(data);
        })
        .catch((error) => {
            // Errors are reported there
            DANGER(error);
        });

    document.getElementsByClassName('form-select')[0].value = '';

    for (const i of inpt) {

        i.value = '';
    }
});
// Configuración del botón de cancelar (btn btn-danger)
document.querySelector('.btn.btn-danger').addEventListener('click', function () {
    const inpt = document.getElementsByClassName('form-control');
    const sex = document.getElementsByClassName('form-select')[0].value = '';

    for (const i of inpt) {

        i.value = '';
    }
});

