const { gets, print } = require('./funcoes-auxiliares-2');

const valorSalario = gets();
const valorBeneficios = gets();


function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}


function pegarAlicota(salario) {
    if (salario >= 0 && salario <= 1100.01) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}


const alicotaImposto = pegarAlicota(valorSalario)

const valorImposto = (calcularPorcentagem(valorSalario, alicotaImposto))

const valorATransferir = valorSalario - valorImposto + valorBeneficios;

print(valorATransferir)