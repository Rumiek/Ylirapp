document.querySelector('.bi.bi-search').closest('button').addEventListener('click', function() {
  const inpt = document.getElementsByClassName('form-control');

  // Crear el elemento de búsqueda
  const searchHTML = `
    <div class="search-overlay active">
      <div class="search-container">
        <div class="search-box">
          <input type="text" placeholder="Buscar..." class="search-input">
          <button class="search-button" id="search-button">
            <i class="bi bi-search"></i>
          </button>
        </div>
        <button class="close-search">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  `;
  
  // Añadir al body
  document.body.insertAdjacentHTML('beforeend', searchHTML);
  
  // Cerrar el panel flotante
  document.getElementById('iconPanel').classList.remove('visible');
  
  // Funcionalidad para cerrar la búsqueda
  document.querySelector('.search-overlay').addEventListener('click', function(e) {
    if(e.target.classList.contains('search-overlay')) {
      this.remove();
    }
  });
  
  document.querySelector('.close-search').addEventListener('click', function() {
    document.querySelector('.search-overlay').remove();
  });
  
  //Evento para el botón de búsqueda
  document.getElementById('search-button').addEventListener('click', async function() {
    // También puedes mostrar el valor del input si lo deseas:
    const searchInput = document.querySelector('.search-input');
    var sex = document.getElementsByClassName('form-select');
    const code = `
      <button class="btn btn-primary" type="button" onclick="SAVE();">Guardar</button>
      <button class="btn btn-danger" type="button" onclick="DELETE();">Eliminar</button>
    `;

    await fetch (`https://api.sheetbest.com/sheets/95fb32ec-c9d3-4048-aa9d-810c127f167b/NHistoria/${parseInt(searchInput.value)}`)        
    .then((r) => r.json())
    .then((data) => {
        // The response comes here
        if (data.length == 0) {
          const searchHTML = `
          <!-- Cuadro de alerta -->
          <div class="alert alert-danger alert-dismissible fade show alert-box" role="alert">
              <strong>V-${searchInput.value}.</strong> No se encuentra.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Aceptar" onclick="window.location.href = './index.html';"></button>
          </div>
          `;
        
          // Añadir al body
          document.body.insertAdjacentHTML('beforeend', searchHTML);

        }else{

          for (const i of data) {
      
            inpt[0].value = i['NHistoria'],
            inpt[1].value = i['Fecha'],
            inpt[2].value = i['Nombre'],
            inpt[3].value = i['Edad'],
            sex[0].value = i['Sexo'],
            inpt[4].value = i['Peso'],
            inpt[5].value = i['Talla'],
            inpt[6].value  = i['IMC'],
            inpt[7].value = i['SO2'],
            inpt[8].value = i['SRespiratorio'],
            inpt[9].value = i['SCardovascular'],
            inpt[10].value = i['Abdomen'],
            inpt[11].value  = i['Extrmidades'],
            inpt[12].value = i['SNervioso'],
            inpt[13].value = i['DPresuntivo'],
            inpt[14].value = i['DDiferencial'],
            inpt[15].value = i['DDefinitivo'],
            inpt[16].value = i['Laboratorios'],
            inpt[17].value = i['Ecosonograma'],
            inpt[18].value = i['Electrocardiograma'],
            inpt[19].value = i['RX'],
            inpt[20].value = i['EstudiosEspecializados'],
            inpt[21].value = i['TratamientoIndicado'],
            inpt[22].value = i['PConsulta'],
            inpt[23].value = i['Observaciones']
          }
        }
    })
    .catch((error) => {
        // Errors are reported there
        console.log(error);
    });

    document.querySelector('.d-flex.justify-content-end.gap-2').innerHTML = code; 
    document.querySelector('.search-overlay').remove();

  });

  // Enfocar el input automáticamente
  document.querySelector('.search-input').focus();
});