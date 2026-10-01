function venda(vlr, qtd) {
     let estq = 10;
    if(qtd <= estq){
        estq -= qtd;
        let rst = vlr * qtd;
        console.log(`Valor Unitário: ${vlr}\n Quantidade: ${qtd}\n Valor total: ${rst}\n Estoque atual: ${estq}`);
    }else {
        console.log(`Quantidade digitada maior!\n Estoque Atual: ${estq}`);
    }
}