class Pessoa {
    nome;
    idade;
    anoDeNaciento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNaciento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};



// const Dns = new Pessoa('Dns', 28);
// // Dns.nome = 'Dns';
// // Dns.idade = 27;

// const Dnss = new Pessoa('Dnss', 29);
// // Dnss.nome = 'Dnss';
// // Dnss.idade = 28;

// console.log(Dns);


function comprararPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

const Dns = new Pessoa('Dns', 28);
const Dnss = new Pessoa('Dnss', 29);


comprararPessoa(Dns, Dnss);
