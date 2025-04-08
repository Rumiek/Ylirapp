const triggerZone = document.getElementById('triggerZone');
const iconPanel = document.getElementById('iconPanel');
let panelTimeout;

// Mostrar panel al entrar en la zona de activación
triggerZone.addEventListener('mouseenter', () => {
    clearTimeout(panelTimeout);
    iconPanel.classList.add('visible');
});

// Ocultar panel al salir de la zona de activación
triggerZone.addEventListener('mouseleave', () => {
    panelTimeout = setTimeout(() => {
        iconPanel.classList.remove('visible');
    }, 300); // Pequeño retraso para evitar ocultar accidentalmente
});

// Mantener panel visible si el cursor está sobre él
iconPanel.addEventListener('mouseenter', () => {
    clearTimeout(panelTimeout);
});

// Ocultar panel al salir del panel
iconPanel.addEventListener('mouseleave', () => {
    iconPanel.classList.remove('visible');
});
