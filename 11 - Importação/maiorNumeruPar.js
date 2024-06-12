const { gets, print } = require('./funcoes-auxiliares')

const n = gets();

let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }

    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }

}

print('Maior numero Par é ' + maiorNumeroPar);
print('Menor numero Impar é ' + menorNumeroImpar)