document.addEventListener('DOMContentLoaded', function() {
    const pesoInput = document.getElementById('peso');
    const tallaInput = document.getElementById('talla');
    const imcInput = document.getElementById('imc');
    
    function calcularIMC() {
        const peso = parseFloat(pesoInput.value);
        const talla = parseFloat(tallaInput.value) / 100; // Convertir cm a m
        
        if (peso && talla) {
            const imc = (peso / (talla * talla)).toFixed(2);
            imcInput.value = imc;
        }
    }
    
    pesoInput.addEventListener('input', calcularIMC);
    tallaInput.addEventListener('input', calcularIMC);
});