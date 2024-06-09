const precoDaEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoDaEtiqueta - (precoDaEtiqueta * 0.1));
}else if (formaDePagamento === 2) {
    console.log(precoDaEtiqueta- (precoDaEtiqueta * 0.15));
}else if (formaDePagamento === 3) {
    console.log(precoDaEtiqueta);
}else {
    console.log(precoDaEtiqueta + (precoDaEtiqueta * 0.1));
}