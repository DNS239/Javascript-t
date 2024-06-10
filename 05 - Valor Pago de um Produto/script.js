function aplicarDescont(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}


function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}


const precoDaEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDescont(precoDaEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDescont(precoDaEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoDaEtiqueta);
} else {
    console.log(aplicarJuros(precoDaEtiqueta, 10));
}