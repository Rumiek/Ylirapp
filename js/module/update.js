// Funcionalidad para el botón guardar
async function SAVE(params) {

    const udpt = document.getElementsByClassName('form-control');
    const knum = document.getElementsByClassName('form-control')[0];
    const sex = document.getElementsByClassName('form-select')[0].value;

    //Update one line to the sheet
    await fetch(`https://api.sheetbest.com/sheets/95fb32ec-c9d3-4048-aa9d-810c127f167b/NHistoria/${knum.value}`, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        
        body: JSON.stringify({
            NHistoria: udpt[0].value,
            Fecha: udpt[1].value,
            Nombre: udpt[2].value,
            Edad: udpt[3].value,
            Sexo: sex,
            Peso: udpt[4].value,
            Talla: udpt[5].value,
            IMC: udpt[6].value,
            SO2: udpt[7].value,
            SRespiratorio: udpt[8].value,
            SCardovascular: udpt[9].value,
            Abdomen: udpt[10].value,
            Extrmidades: udpt[11].value,
            SNervioso: udpt[12].value,
            DPresuntivo: udpt[13].value,
            DDiferencial: udpt[14].value,
            DDefinitivo: udpt[15].value,
            Laboratorios: udpt[16].value,
            Ecosonograma: udpt[17].value,
            Electrocardiograma: udpt[18].value,
            RX: udpt[19].value,
            EstudiosEspecializados: udpt[20].value,
            TratamientoIndicado: udpt[21].value,
            PConsulta: udpt[22].value,
            Observaciones: udpt[23].value
        }),
    })
        .then((r) => r.json())
        .then((data) => {
            // The response comes here
            UPDATE();
        })
        .catch((error) => {
            // Errors are reported there
            console.log(error);
        });
        window.location.href = "./index.html";        
}
