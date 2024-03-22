const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    const imc = (peso / (altura * altura)).toFixed(2);
    
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Seu IMC é: ' + imc;
});
