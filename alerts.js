// Crear elementos de alertas
function DANGER(text){
  const searchHTML = `
    <!-- Cuadro de alerta -->
    <div class="alert alert-danger alert-dismissible fade show alert-box" role="alert">
        <strong>${text}.</strong> Compruebe su conexión a internet.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Aceptar"></button>
    </div>
  `;
  
  // Añadir al body
  document.body.insertAdjacentHTML('beforeend', searchHTML);
}

function SUCCESS(text){
  const searchHTML = `
    <!-- Cuadro de alerta -->
    <div class="alert alert-success alert-dismissible fade show alert-box" role="alert">
        <strong>${text[0]['Nombre']}.</strong> Registrado con exito.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Aceptar"></button>
    </div>
  `;
  
  // Añadir al body
  document.body.insertAdjacentHTML('beforeend', searchHTML);
}


function UPDATE(){
  const searchHTML = `
    <!-- Cuadro de alerta -->
    <div class="alert alert-success alert-dismissible fade show alert-box" role="alert">
        <strong>Registro actualizado.</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Aceptar"></button>
    </div>
  `;
  
  // Añadir al body
  document.body.insertAdjacentHTML('beforeend', searchHTML);
}

function DEL(){
  const searchHTML = `
    <!-- Cuadro de alerta -->
    <div class="alert alert-success alert-dismissible fade show alert-box" role="alert">
        <strong>Eliminado con exito.</strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Aceptar"></button>
    </div>
  `;
  
  // Añadir al body
  document.body.insertAdjacentHTML('beforeend', searchHTML);
}