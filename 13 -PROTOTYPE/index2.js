

const promesaDeUmNumeroQualquer = new Promise((resolve, reject) => {


    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000);

})

console.log('Dns')

promesaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
        return value + 10
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('finalizou!')
    })