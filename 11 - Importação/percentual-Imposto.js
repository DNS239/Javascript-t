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







                           //// Desafio ////

// function calcularImposto(salario) {
//     let aliquota;
//     if (salario >= 0 && salario <= 1100) {
//         aliquota = 0.05;
//     } else if (salario > 1100 && salario <= 2500) { 
//         aliquota = 0.10;  // Deve retornar 0.10, não 10
//     } else {
//         aliquota = 0.15;  // Deve retornar 0.15, não 15
//     }
//     return aliquota;
// }

// // Função para calcular a porcentagem
// function calcularPorcentagem(valor, porcentagem) {
//     return valor * porcentagem;
// }

// // Lê os valores de Entrada
// const valorSalario = parseFloat(gets());
// const valorBeneficios = parseFloat(gets());

// // Calcula o imposto através da função "calcularImposto"
// const alicotaImposto = calcularImposto(valorSalario);
// const valorImposto = calcularPorcentagem(valorSalario, alicotaImposto);

// // Calcula e imprime a Saída (com 2 casas decimais)
// const saida = valorSalario - valorImposto + valorBeneficios;
// print(saida.toFixed(2));
