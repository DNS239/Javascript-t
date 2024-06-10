function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}


function clasificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso.';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal.';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso.';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso.';
    } else {
        return 'Tais Carla.'
    }
}

//Main
(function() {
    const peso = 60;
    const altura = 1.67;

    const imc = calcularImc(peso, altura);
    console.log(clasificarImc(imc));

})();

