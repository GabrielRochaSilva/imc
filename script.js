document.getElementById('calcular').addEventListener('click', function() {
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);


    const imc = peso / (altura * altura);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;

    if(imc < 18.5){
        resultado.innerHTML += "<br>Abaixo do peso"; 
    }else if(imc >= 18.6 && imc <= 24.9){
        resultado.innerHTML += "<br>Peso ideal(parabéns)"; 
    }else if(imc >= 25 && imc <= 29.9){
        resultado.innerHTML += "<br>Levemente acima do peso"; 
    }else if(imc >= 30 && imc <= 34.9){
        resultado.innerHTML += "<br>Obesidade I"; 
    }else if(imc >= 35 && imc <= 39.9){
        resultado.innerHTML += "<br>Obesidade II(severa)"; 
    }else if(imc > 40){
        resultado.innerHTML += "<br>Obesidade III(mórbida)"; 
    }
});