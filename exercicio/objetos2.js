class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;

    }
    descrever (){
        console.log('meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

function compararPessoas (p1,p2) {
if (p1>p2){
    console.log('mais velho');
}
else{
    console.log('mais novo');
}

}