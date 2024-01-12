/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDeViagem(distancia, precoCombustivel){;
    return distancia * this.gastoMedioPorKm * precoCombustivel;

}
}
const uno = new Carros('fiat', 'preto', 1/14);
const palio = new Carros('fiat', 'vermelho', 1/10)


console.log('O total gasto com a sua viagem é de :');
console.log(palio.calcularGastoDeViagem(620,5.19).toFixed(2));

