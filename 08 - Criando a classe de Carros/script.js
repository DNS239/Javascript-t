class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }


    calcularGastoDoPercurso(distandicaEmKm, precoDoCombustivel) {
        return distandicaEmKm * this.gastoMedioPorKm * precoDoCombustivel
    }
}

const Porsh = new Carro('Porsh', 'Preto', 1 / 12);
console.log(Porsh.calcularGastoDoPercurso(70, 5));

const Palio = new Carro('fiat', 'Preto', 1 / 10);
console.log(Palio.calcularGastoDoPercurso(70, 5));