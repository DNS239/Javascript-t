const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaEmKm = 10000;

const listrosCosumidos = distanciaEmKm / kmPorLitro;
const valorGasto  = listrosCosumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
