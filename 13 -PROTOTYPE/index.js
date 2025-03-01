
// const pessoa = {
//     genero: 'Masculino'
// }



// const Dns = {
//     nome: 'Dns',
//     __proto__: pessoa
// }


// const Dns = Object.create(pessoa)

// Dns.nome = 'Dns'.nome = 'Dns'



// console.log(Dns.genero)


function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`${this.nome} está falando...`)
}

const Denis = {
    genero: 'Masculino'
}
Pessoa.call(Denis, 'nome', 28)
console.log(Denis)


// const Denis = new Pessoa('Denis', 28)
//console.log(new Pessoa('Denis', 28))
//Denis.falar()