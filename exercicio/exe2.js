const notas = (100 + 3 + 2) / 3;
const reprovacao = notas <5;
const recuperacao = notas >=5 && notas <=7;
const passou = notas > 7;



if(reprovacao){
    console.log(notas.toFixed(2));
    console.log('Reprovado');
}

if(recuperacao){
    console.log(notas.toFixed(2));
    console.log('recuperação');
}
if(passou) {
    console.log(notas.toFixed(2));
    console.log('Aprovado!');
}