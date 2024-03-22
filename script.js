function calcular(){
    const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
    event.preventDefault();

    var h = parseFloat(document.getElementById('height').value);
    var w = parseFloat(document.getElementById('weight').value);
    
    var imc = (w / (h * h)).toFixed(2);
    
    const result = document.getElementById('value');
    result.textContent = `Seu IMC é: ${imc}`;

    if (imc < 18.5){
        result.textContent = "Seu IMC é: "+ imc + " você está abaixo do peso.";
    } else if (imc >= 18.5 && imc <= 24.9){
        result.textContent = "Seu IMC é: "+ imc + " você está no peso ideal.";
    } else if (imc >= 25 && imc <= 29.9){
        result.textContent = "Seu IMC é: "+ imc + " você está com execesso de peso.";
    } else if (imc >= 30 && imc <= 34.9){
        result.textContent = "Seu IMC é: "+ imc + " você está com obesidade classe 1.";
    } else if (imc >= 35 && imc <= 39.9){
        result.textContent = "Seu IMC é: "+ imc + " você está com obesidade classe 2";
    } else if (imc >= 40){
        result.textContent = "Seu IMC é: "+ imc + " você está com obesidade mórbida";
    }
});
}