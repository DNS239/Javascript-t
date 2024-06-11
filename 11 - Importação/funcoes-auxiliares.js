const entradas = [10, 5, 50, 98, 23, 33, 44, 99, 93, 23];
let i = 0;



function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}


function print(texto) {
    console.log(texto);
}


module.exports = {
    gets: gets,
    print: print
};


