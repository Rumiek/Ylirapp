// Funcionalidad para el botón eliminar
async function DELETE(params) {

    const knum = document.getElementsByClassName('form-control')[0];


    //Delete one line to the sheet
    await fetch(`https://api.sheetbest.com/sheets/95fb32ec-c9d3-4048-aa9d-810c127f167b/NHistoria/${knum.value}`,
        {
          method: "DELETE",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          DEL();
        })
        .catch((error) => {
          console.error(error);
        });

    window.location.href = "./index.html";
}
