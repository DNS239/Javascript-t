const precoEtanol = 5.79;
const precoGasolina = 6.79;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol'

const listrosCosumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = listrosCosumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = listrosCosumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

