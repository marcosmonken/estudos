function aplicarDesconto (valor,desconto){
    return valor - (valor * desconto/100);
}
function aplicarJuros ( valor,juros){
    return valor + (valor * (juros *  0.01));
}



    const precoProduto = 100;
    const jurosAplicado = 50;
    const formaDePagamento = 2;

    if (formaDePagamento === 1){
        console.log(aplicarDesconto(precoProduto, 10));
    }
    else if (formaDePagamento ===2){
            console.log(aplicarJuros(precoProduto,jurosAplicado));
        }
  
    
