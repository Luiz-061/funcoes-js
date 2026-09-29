function acumulador(n){
    let i = 1;
    let acm = 0; //Onde faz a soma dos números.
    while(i <= n){
        acm+=i;
        i++;
    }
    console.log(`Soma total: ${acm}`);
}

acumulador(10);