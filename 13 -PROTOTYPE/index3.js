
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')



async function buscarAquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf-8')
        console.log(textoDoArquivo)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('finalizou!')
    }
}

buscarAquivo()






// promesaDaLeituraDoArquivo
//     .then((arquivo) => arquivo.toString('utf8'))
//     .then((texto) => texto.split('\n').slice(1))
//     .then((linhaSemCabeçalho) => linhaSemCabeçalho.map((linha) => {
//         const [nome, feito] = linha.split(';')
//         return {
//             nome,
//             feito: feito.trim() === 'true'
//         }
//     }))
//     .then((listaDeTarefas) => console.log(listaDeTarefas))
//     .catch((error) => console.log('Deu mrd!', error))