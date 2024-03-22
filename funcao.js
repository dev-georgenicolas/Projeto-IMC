const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const h = parseFloat(document.getElementById('height').value);
    const w = parseFloat(document.getElementById('weight').value);

    const imc = (w / (h * h)).toFixed(2);

    
    const result = document.getElementById('value');
    result.textContent = imc;
});
