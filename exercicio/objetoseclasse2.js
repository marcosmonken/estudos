 /* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoa {
    nome;
    altura;
    peso;

    constructor(nome, peso , altura ){
        this.nome = nome;
        this.altura= altura;
        this.peso = peso;
    }
 
    pessoaImc(){
        return this.peso/ (this.altura * this.altura);
    }


    classificarImc() {
 const IMC = this.pessoaImc();

    if (IMC <18.5){
    
        return ('Abaixo do peso');
    }
    else if(IMC >=18.5 && IMC <=25){
        return ('Peso normal');
    }
    
    else if(IMC >=25 && IMC <=30){
        return ('Acima do peso');
        
    }
    else if(IMC >=30 && IMC <= 40){
        return ('Obeso');
        
    }
    else{
        return ('Obesidade grave');
        
    } 
}
}

const jose = new Pessoa ('jose',70,1.75);
console.log(jose);
console.log(jose.classificarImc());
const vitor = new Pessoa('victor',89,1.94);
console.log(vitor);
console.log(vitor.classificarImc());
